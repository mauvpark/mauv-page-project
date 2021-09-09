import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Intro from "../components/Intro/Intro";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import PR from "../components/PR/PR";
import Products from "../components/Products/Products";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome!</title>
				<meta name="description" content="Welcome to Mauv site!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container">
				<ToggleButton />
				<Intro />
				<PR />
				<Products />
			</main>
		</div>
	);
};

export default Home;
