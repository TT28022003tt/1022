import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Dynamic from "./components/Dynamic";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import SocialMediaIcons from "./components/SocialMediaIcons";
import { ChatProvider } from "./ChatContext";
import ScrollToTopButton from "./components/ScrollToTopbtn";


export const metadata: Metadata = {
  title: "1022",
  description: "WELCOME TO 1022",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <ChatProvider>
          <div className="flex-1">
            <div className="flex flex-col justify-center items-center w-full bg-[#10203F]">
              <Navbar />
              <Dynamic />
              <Carousel />
            </div>
            <main className="flex flex-col justify-center items-center">
              {children}
              <ChatWidget />
              <SocialMediaIcons />
              <ScrollToTopButton/>
            </main>
          </div>
          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}
