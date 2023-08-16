import React, { Component } from "react";
import "../styles/App.css";
import {
	BrowserRouter as Router,
} from "react-router-dom";
import Footer from "./Footer";
import Page from "./Page";
import Header from "./Header";
import Navigation from "./Navigation";

class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<div className='app'>
					<h1>Hello There</h1>
					<header>{<Header />}</header>
					<main>
						<aside>{<Navigation />}</aside>
						<section className='page'>{<Page />}</section>
					</main>
					<footer>{<Footer />}</footer>
				</div>
			</Router>
		);
	}
}

export default App;