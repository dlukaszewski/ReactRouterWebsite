import React from "react";
import "../styles/Header.css";
import { Routes, Route } from "react-router-dom";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/header4.jpg";

const FirstImage = () => {
	return <img src={img1} alt='NY City'></img>;
};
const SecondImage = () => {
	return <img src={img2} alt='Person at sunset'></img>;
};
const ThirdImage = () => {
	return <img src={img3} alt='Random City at night'></img>;
};
const FourthImage = () => {
	return <img src={img4} alt='Random City at night'></img>;
};
const ErrorPage = () => {
	return <img src={img1} alt='NY city'></img>;
};
const Header = () => {
	// const images = [img1, img2, img3, img4];
	// const index = Math.floor(Math.random() * 4);
	// const img = images[index];
	return (
		<Routes>
			<Route path='/' Component={FirstImage} />
			<Route path='/product' Component={SecondImage} />
			<Route path='/contact' Component={ThirdImage} />
			<Route path='/admin' Component={FourthImage} />
			<Route path='*' Component={ErrorPage} />
		</Routes>
		// <img src={img} alt='header'></img>
	);
};

export default Header;
