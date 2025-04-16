import type { Metadata } from "next";
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
      <body className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="flex flex-col justify-center items-center w-full bg-[#10203F]">
            <Navbar />
            <Dynamic />
            <Carousel />
          </div>
          <main className="flex flex-col justify-center items-center">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
