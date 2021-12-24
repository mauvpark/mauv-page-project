import { Container } from "@mui/material";
import React, { ReactElement } from "react";

import styles from "./Last.module.scss";

function Last(): ReactElement {
	return (
		<main>
			<Container
				className={styles.lastContainer}
				sx={{
					position: "relative",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					scrollSnapAlign: "center",
				}}
				maxWidth="xl"
			>
				<h1
					data-text="NOW ON SALE MAUV !"
					onClick={() => window.open("https://github.com/mauvpark")}
				>
					NOW ON SALE MAUV !
				</h1>
			</Container>
		</main>
	);
}

export default Last;
