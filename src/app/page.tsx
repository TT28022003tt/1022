import Image from "next/image";
import SloganSection from "./components/SloganSection";
import Carouselmini from "./components/Carouselmini";

export default function Home() {
  return (
    <div className="">

      <div className="">
        <SloganSection/>
      </div>
      <div className="">
        <Carouselmini />
      </div>
    </div>
  );
}
