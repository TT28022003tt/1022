import AllSection from "../components/AllSection";
import BannerHome from "../components/BannerHome";
import BrandSlider from "../components/Brands";
import Carouselmini from "../components/Carouselmini";
import Extra from "../components/Extra";
import InfoUneed from "../components/InfoUneed";

const Page1022 = () => {
	return (
		<div className="flex flex-col justify-center items-center ">
			<div className="z-10 hidden md:block">
				{/* <SloganSection /> */}
			</div>
			<div className="z-20">
				<Carouselmini />
			</div>
			<div className="z-20">
				<AllSection title="TIN TỨC SỰ KIỆN" />
				<AllSection title="CHÍNH SÁCH MỚI" />
				<AllSection title="MỖI NGÀY MỘT THÔNG TIN" />
				<AllSection title="THÔNG TIN DOANH NGHIỆP" />
			</div>
			<div className="z-20 flex flex-col justify-center items-center">
				<InfoUneed />
				<BannerHome />
				<Extra />
				{/* <Brands/> */}
			</div>
			<div className="">
				<BrandSlider/>
			</div>
		</div>

	);
};

export default Page1022;