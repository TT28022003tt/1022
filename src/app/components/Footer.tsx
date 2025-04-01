"use client"



const Footer = () => {
	return (
		<footer className="bg-[#003294] text-white p-6">
			<div className="max-w-6xl mx-auto flex flex-col ">
				{/* Thông tin bên trái */}
				<div className="pb-2">
					<p className="font-bold uppercase text-center text-xl md:text-2xl">
						Bản quyền thuộc Trung tâm Thông tin và Giám sát, Điều hành Thông minh Đà Nẵng
					</p>
				</div>
				<div className="flex justify-between items-center">
					<div className="space-y-2 ">
						<p className="">📜 Giấy phép: số 167/GGP-STTTT do Sở Thông tin và Truyền thông cấp ngày 03 tháng 03 năm 2017</p>
						<p>🏛️ Địa chỉ: Tầng 11 - Công viên phần mềm, số 02 Quang Trung, thành phố Đà Nẵng</p>
						<p>👤 Người chịu trách nhiệm: <strong>Nguyễn Văn Quốc - Giám đốc Trung tâm</strong></p>
						<p>☎️ Tel: (0236) 1022 - (0236) 3881 888, (0236) 396 777</p>
						<p>📧 Email: <a href="mailto:1022@danang.gov.vn" className="text-blue-300 hover:underline">1022@danang.gov.vn</a></p>
						<p>📠 Fax: (0236) 3996 777</p>
					</div>

					{/* Hình ảnh bên phải */}
					<div className="w-32 h-32 hidden md:block">
						<img src="/Footer.png" alt="1022 Đà Nẵng" className="w-full h-full object-contain " />
					</div>
				</div>

			</div>
		</footer>
	);
};

export default Footer;
