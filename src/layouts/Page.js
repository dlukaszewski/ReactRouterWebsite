import React from "react";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import AdminPanel from "../pages/AdminPanel";
import ErrorPage from "../pages/ErrorPage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";

const Page = () => {
	return (
		<Routes>
			<Route path='/' Component={HomePage} />
			<Route path='/products' Component={ProductListPage} />
			<Route path='/product/:id' Component={ProductPage} />
			<Route path='/contact' Component={Contact} />
			<Route path='/admin' Component={AdminPanel} />
			<Route path='*' Component={ErrorPage} />
		</Routes>
	);
};

export default Page;
