import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = (props) => {
    const id = useParams();
    return (
		<>
			<div>Strona Produktu</div>
			<Product id={id.id}/>
			<Link to='/products'>Powrót do listy produktów</Link>
		</>
	);
};

export default ProductPage;
