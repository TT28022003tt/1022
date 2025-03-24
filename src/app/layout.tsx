import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Dynamic from "./components/Dynamic";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";


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
      <body
        className=""
      >
        <div className="">
          <div className="flex flex-col justify-center items-center w-screen bg-[#10203F]">
            <Navbar />
            <Dynamic/>
            <Carousel/>
          </div>
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
          <div className="">
            {/* Footer */}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
