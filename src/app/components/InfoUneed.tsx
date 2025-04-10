"use client"

import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import CardPage from "./CardPage";


const InfoUneed = () => {
	return (
		<div className='bg-[#003294] w-screen h-[550px] md:h-[400px] m-4 flex flex-col justify-center items-center'>
			<div className="w-[80%] h-[90%] flex flex-col justify-center items-center">
				{/* Tiêu đề */}
				<div className="mb-4 md:mb-10 ">
					<h2 className="uppercase tracking-wide custom-outline-text-InfoUneed">
						Thông tin cần biết
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center px-4">
					<CardPage icon="/vector/Vector1.png" title="Hệ Thống Danh Bạ"/>
					<CardPage icon="/vector/Vector2.png" title="Số Liệu Kinh Tế Xã Hội"/>
					<CardPage icon="/vector/Vector3.png" title="Lịch Tạm Ngừng Cung Cấp Điện"/>
					<CardPage icon="/vector/Vector4.png" title="Lịch Tạm Ngừng Cung Cấp Nước"/>
					<CardPage icon="/vector/Vector5.png" title="Lịch Truyền Hình"/>
					<CardPage icon="/vector/Vector6.png" title="Lịch Tàu Xe"/>
					<CardPage icon="/vector/Vector7.png" title="Số Điện Thoại Khẩn Cấp"/>
					<CardPage icon="/vector/Vector8.png" title="Lịch Sự kiện"/>
				</div>
			</div>

		</div>
	);
};

export default InfoUneed;