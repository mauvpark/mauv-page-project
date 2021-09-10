import { Container, Typography } from "@mui/material";
import React, { ReactElement } from "react";

import styles from "./Last.module.scss";

const Last = (): ReactElement => {
	return (
		<Container
			className={styles.lastContainer}
			sx={{
				width: "100%",
				height: "100%",
				scrollSnapAlign: "center",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			maxWidth="xl"
		>
			<h1
				data-text="NOW ON SALE MAUV !"
				onClick={() => window.open("https://github.com/Mauv-hub")}
			>
				NOW ON SALE MAUV !
			</h1>
		</Container>
	);
};

export default Last;
