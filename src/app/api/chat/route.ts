import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'No message provided' }, { status: 400 });
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // hoặc 'gpt-4' nếu bạn có quyền
        messages: [
          { role: 'system', content: 'Bạn là một trợ lý AI thân thiện và hữu ích.' },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    const reply = data.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({ reply });
  } catch (err) {
    console.error('OpenAI API Error:', err);
    return NextResponse.json({ error: 'AI không phản hồi' }, { status: 500 });
  }
}
