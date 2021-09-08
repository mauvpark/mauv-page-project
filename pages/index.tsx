import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";

import Intro from "../components/Intro/Intro";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import PR from "../components/PR/PR";
import Products from "../components/Products/Products";

const Home: NextPage = () => {
	return (
		<Container maxWidth="xl">
			<Head>
				<title>Welcome!</title>
				<meta name="description" content="Welcome to Mauv site!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<ToggleButton />
				<Intro />
				<PR />
				<Products />
			</main>
		</Container>
	);
};

export default Home;
