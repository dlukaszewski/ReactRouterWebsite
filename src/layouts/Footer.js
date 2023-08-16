import React from "react";
import { useLocation} from "react-router-dom";

const Footer = () => {
	let location = useLocation();
	const pathArray1 = location.pathname.replace(/\//g, '-');

	return (
		<>
			<p>stopka</p>
			<p> {"-" + (pathArray1.length > 1 ? pathArray1.slice(1) : "Strona Główna") + "-"}</p>
		</>
	);
};

export default Footer;
