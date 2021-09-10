import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Player } from "@lottiefiles/react-lottie-player";

import Intro from "../components/Intro/Intro";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import PR from "../components/PR/PR";
import Products from "../components/Products/Products";
import Projects from "../components/Projects/Projects";
import Last from "../components/Last/Last";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Mauv !</title>
				<meta name="description" content="Welcome to Mauv site!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container">
				<Player
					style={{
						top: 0,
						left: 0,
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
					autoplay
					loop
					src="https://assets8.lottiefiles.com/packages/lf20_06qof0oc.json"
				/>
				<ToggleButton />
				<Intro />
				<PR />
				<Products />
				<Projects />
				<Last />
			</main>
		</div>
	);
};

export default Home;
