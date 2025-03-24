"use client"

import { usePathname } from "next/navigation";
import DynLink from "./DynLink";
import DynSlogan from "./DynSlogan";
import { useEffect, useState } from "react";

const Dynamic = () => {
	const pathname = usePathname();
	const [change, setChange] = useState(false);
	useEffect(() => {
		setChange(pathname.endsWith("/1022"));
	}, [pathname]);
	return (
		<div className=''>
			{change ? <DynLink /> : <DynSlogan />}
		</div>
	);
};

export default Dynamic;