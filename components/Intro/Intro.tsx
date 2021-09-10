import React from "react";
import { Container } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import styles from "./Intro.module.scss";

const Intro = (): React.ReactElement => {
	return (
		<Container className="section" maxWidth="xl">
			<Player
				className={styles.lottieCodeMan}
				autoplay
				loop
				src="https://assets8.lottiefiles.com/private_files/lf30_BX96aR.json"
			>
				<Controls
					visible={false}
					buttons={["play", "repeat", "frame", "debug"]}
				/>
			</Player>
			<svg
				className={styles.logo}
				width="632"
				height="94"
				viewBox="0 0 632 94"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M58.375 74H49.3281V42.4531H14.9219V74H5.92188V5.75H14.9219V35.0938H49.3281V5.75H58.375V74Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M84.0156 74H75.0156V5.75H84.0156V74Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M98.875 87.5938L93.9531 84.2188C96.8906 80.125 98.4219 75.9062 98.5469 71.5625V63.7344H107.031V70.5312C107.031 73.6875 106.25 76.8438 104.688 80C103.156 83.1562 101.219 85.6875 98.875 87.5938Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M152.828 74H143.828V5.75H152.828V74Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M230.828 56.1875H202.234L195.812 74H186.531L212.594 5.75H220.469L246.578 74H237.344L230.828 56.1875ZM204.953 48.7812H228.156L216.531 16.8594L204.953 48.7812Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M267.391 5.75L289.703 61.4375L312.016 5.75H323.688V74H314.688V47.4219L315.531 18.7344L293.125 74H286.234L263.875 18.875L264.766 47.4219V74H255.766V5.75H267.391Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M375.016 5.75L397.328 61.4375L419.641 5.75H431.312V74H422.312V47.4219L423.156 18.7344L400.75 74H393.859L371.5 18.875L372.391 47.4219V74H363.391V5.75H375.016Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M485.734 56.1875H457.141L450.719 74H441.438L467.5 5.75H475.375L501.484 74H492.25L485.734 56.1875ZM459.859 48.7812H483.062L471.438 16.8594L459.859 48.7812Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M557.875 5.75V52.1562C557.844 58.5938 555.812 63.8594 551.781 67.9531C547.781 72.0469 542.344 74.3438 535.469 74.8438L533.078 74.9375C525.609 74.9375 519.656 72.9219 515.219 68.8906C510.781 64.8594 508.531 59.3125 508.469 52.25V5.75H517.375V51.9688C517.375 56.9062 518.734 60.75 521.453 63.5C524.172 66.2188 528.047 67.5781 533.078 67.5781C538.172 67.5781 542.062 66.2188 544.75 63.5C547.469 60.7812 548.828 56.9531 548.828 52.0156V5.75H557.875Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
				<path
					d="M594.672 62.0469L614.172 5.75H624.016L598.703 74H590.734L565.469 5.75H575.266L594.672 62.0469Z"
					stroke="#0047ab"
					strokeWidth="3"
					mask="url(#path-1-outside-1)"
				/>
			</svg>
		</Container>
	);
};

export default Intro;
