import AllSection from "../components/AllSection";
import BannerHome from "../components/BannerHome";
import Carouselmini from "../components/Carouselmini";
import InfoUneed from "../components/InfoUneed";
import SloganSection from "../components/SloganSection";

const Page1022 = () => {
	return (
		<div className="flex flex-col justify-center items-center ">
			<div className="z-20">
				<SloganSection />
			</div>
			<div className="z-10">
				<Carouselmini />
			</div>
			<div className="z-20">
				<AllSection title="TIN TỨC SỰ KIỆN" />
				<AllSection title="CHÍNH SÁCH MỚI" />
				<AllSection title="MỖI NGÀY MỘT THÔNG TIN" />
				<AllSection title="THÔNG TIN DOANH NGHIỆP" />
			</div>
			<div className="z-20">
				<InfoUneed/>
			</div>
			<div className="z-20">
				<BannerHome/>
			</div>
		</div>

	);
};

export default Page1022;