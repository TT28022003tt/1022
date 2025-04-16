import Image from "next/legacy/image";
import Slogan from "./components/Slogan";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[65%] max-w-7xl mx-auto flex flex-col justify-center items-center">
      <Slogan />
      <NewsSection />
    </div>
  );
}
