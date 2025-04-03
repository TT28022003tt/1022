import Image from "next/image";
import Slogan from "./components/Slogan";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <div className='w-[85%] md:w-[70%] flex flex-col justify-center items-center'>
      <Slogan />
      <NewsSection />
    </div>
  );
}
