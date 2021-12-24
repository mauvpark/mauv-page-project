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
		<React.Fragment>
			{/* 헤드 */}
			<Head>
				<title>Welcome to Mauv !</title>
				<meta
					name="description"
					content="개발자 Mauv의 프로필과 프로젝트를 소개합니다."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* 배경 */}
			<Player
				rendererSettings={{
					preserveAspectRatio: "none",
				}}
				style={{
					top: 0,
					left: 0,
					position: "absolute",
					width: "100%",
					height: "100vh",
				}}
				autoplay
				loop
				src="https://assets8.lottiefiles.com/packages/lf20_06qof0oc.json"
			/>
			{/* 테마 변경 */}
			<ToggleButton />
			{/* 페이지 */}
			<Intro />
			<PR />
			<Products />
			<Projects />
			<Last />
		</React.Fragment>
	);
};

export default Home;
