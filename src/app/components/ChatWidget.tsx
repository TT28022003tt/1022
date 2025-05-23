'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../ChatContext';

const botAvatar =
  'https://app.cdn.chative.io/0778e439-c017-52e7-ba9d-24b347d497cb/file/1734431480729/AhaCOD%20(14)%20(1).png';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Xin chào! Mình có thể giúp gì cho bạn?', timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { setIsChatOpen } = useChat();

  // Update context when chat opens/closes
  useEffect(() => {
    setIsChatOpen(open);
  }, [open, setIsChatOpen]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input.trim(), timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = {
        from: 'bot',
        text: `Bạn vừa nói: "${input.trim()}". Mình sẽ phản hồi sớm.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 50, scale: 0.8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 50, scale: 0.8, filter: 'blur(4px)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-gradient-to-br from-white to-gray-100 shadow-2xl rounded-3xl w-80 h-[400px] mb-4 p-4 flex flex-col justify-between border border-gray-200/50"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <img src={botAvatar} alt="Bot" className="w-8 h-8 rounded-full" />
              <h3 className="font-semibold text-lg text-gray-900 tracking-tight">Trợ lý Aha</h3>
              <button onClick={() => setOpen(false)} className="ml-auto text-gray-500 hover:text-gray-800 transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 text-sm pr-1 custom-scrollbar">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.from === 'bot' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={msg.from === 'bot' ? 'flex items-start gap-2' : 'flex justify-end'}
                >
                  {msg.from === 'bot' ? (
                    <>
                      <motion.img
                        src={botAvatar}
                        alt="Bot"
                        className="w-8 h-8 rounded-full shrink-0 hover:scale-110 transition"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="bg-gradient-to-r from-gray-200/80 to-gray-300/80 p-3 rounded-xl max-w-[70%] shadow-sm backdrop-blur-sm">
                        <p className="text-gray-900 text-sm">{msg.text}</p>
                        <span className="text-xs text-gray-500">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-xl max-w-[70%] shadow-md">
                      <p className="font-medium text-sm">{msg.text}</p>
                      <span className="text-xs text-blue-200">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-2"
                >
                  <img src={botAvatar} alt="Bot" className="w-8 h-8 rounded-full shrink-0" />
                  <div className="bg-gray-200/80 p-3 rounded-xl max-w-[70%] shadow-sm">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.4 }}
                        className="w-2 h-2 bg-gray-500 rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.4, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-500 rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.4, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Nhập tin nhắn..."
                className="border border-gray-300/50 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/80 backdrop-blur-sm transition-all flex-1 placeholder:text-gray-400 placeholder:transition-opacity placeholder:duration-500"
              />
              <motion.button
                onClick={handleSend}
                whileHover={{ scale: 1.05, background: 'linear-gradient(to_right, #2563EB, #7C3AED)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-1"
              >
                <Send className="w-4 h-4" />
                <span>Gửi</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Avatar Bubble Trigger */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full shadow-2xl overflow-hidden relative"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 0, 255, 0.3)' }}
      >
        {/* Pseudo-element for circular gradient border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <img
          src={botAvatar}
          alt="Bot Avatar"
          className="w-[80%] h-[80%] object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        />
      </motion.button>
    </div>
  );
}