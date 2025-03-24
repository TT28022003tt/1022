"use client"

import { faBars, faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();
	const hideHamburger = pathname.endsWith("/1022");
	return (
		<nav className="bg-[#10203F] text-white w-[90%] py-2 px-4 flex items-center justify-between">
			{/* LOGO & SLOGAN */}
			<div className="flex items-center gap-2">
				<Link href="/" className="flex flex-col items-center gap-2">
					<Image src="/Logo1022.png" alt="Logo 1022" width={150} height={150} />
					<div className="text-xs flex flex-col justify-center items-center">
						<p className="font-bold">CỔNG THÔNG TIN DỊCH VỤ CÔNG ĐÀ NẴNG</p>
						<p className="">Gọi: <span className="font-bold text-[#E51717]">*1022</span> hoặc <span className="font-bold text-[#E51717]">0236.1022</span></p>
					</div>
				</Link>
			</div>

			{/* SEARCH BAR */}
			<div className="relative flex items-center">
				<p className="uppercase text-sm font-bold mr-2 text-[#00b3ff94] text-right">Search<br />Anything</p>
				<div className="relative w-64">
					<input type="text" placeholder="Search..." className="input input-bordered rounded-full w-full pr-10 text-black" />
					<button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500">
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
				<div className="flex items-center space-x-4 pl-4">
					<FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer" />
					{!hideHamburger && (
						<div>
							<button className="text-white text-2xl">
								<FontAwesomeIcon icon={faBars} />
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
