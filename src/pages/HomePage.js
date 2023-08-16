import React from "react";
import Article from "../components/Article";

const articles = [
	{
		id: 1,
		title: "Czym jest teoria Stun?",
		author: "Sheldon Cooper",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis totam rem impedit nihil ut fugit quia dolore repudiandae similique asperiores sunt reiciendis voluptates, nesciunt consequatur repellendus magnam excepturi doloremque!",
	},
	{
		id: 2,
		title: "Czym jest Paradok Fermiego?",
		author: "Leonard Hofstadter",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis totam rem impedit nihil ut fugit quia dolore repudiandae similique asperiores sunt reiciendis voluptates, nesciunt consequatur repellendus magnam excepturi doloremque!",
	},
	{
		id: 3,
		title: "Ciemna materia i Ciemna Energia?",
		author: "Rajesh Ramayan Koothrappali",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis totam rem impedit nihil ut fugit quia dolore repudiandae similique asperiores sunt reiciendis voluptates, nesciunt consequatur repellendus magnam excepturi doloremque!",
	},
];

const HomePage = () => {
const artList = articles.map(article => (
    <Article key={article.id} title={article.title} author={article.author} text={article.text}/>
))

	return <div className='home'>{artList}</div>;
};

export default HomePage;
