import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["car", "bike", "boat"];

const ProductListPage = () => {
	const list = products.map(product => (
		<li key={product}>
			<Link to={`/product/${product}`}>
				{product[0].toUpperCase() + product.slice(1)}
			</Link>
		</li>
	));

	return (
		<div className='products'>
			<h3>Lista Produktów</h3>
			<div>
				<ul>{list}</ul>
			</div>
		</div>
	);
};

export default ProductListPage;
