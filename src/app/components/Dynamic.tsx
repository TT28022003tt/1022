"use client"

import { usePathname } from "next/navigation";
import DynLink from "./DynLink";
import { useEffect, useState } from "react";

const Dynamic = () => {
	const pathname = usePathname();
	const [change, setChange] = useState(false);
	useEffect(() => {
		setChange(pathname.endsWith("/"));
	}, [pathname]);
	return (
		<div className=''>
			{change ? <DynLink /> : ""}
		</div>
	);
};

export default Dynamic;