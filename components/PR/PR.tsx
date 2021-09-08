import React from "react";
import { Container, Paper, Chip, Stack } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import classNames from "classnames";

import styles from "./PR.module.scss";

const PR = (): React.ReactElement => {
	return (
		<Container className="container" maxWidth="xl">
			<Paper
				className={classNames(
					styles.PRInnerContainer,
					"PRInnerContainer"
				)}
				elevation={3}
			>
				<section className={styles.imageSection}>
					<Player
						className={styles.PRLottie}
						autoplay
						loop
						src="https://assets8.lottiefiles.com/private_files/lf30_wqypnpu5.json"
					/>
				</section>
				<section className={styles.textSection}>
					<h1>HYEONMIN PARK</h1>
					<p>📌 모르는 건 될 때까지 파는 성격의 소유자</p>
					<p>📌 새로운 기술을 끊임없이 탐욕하는 자</p>
					<p>📌 성장 욕구가 투철한 자</p>
					<Stack
						className={styles.techStack}
						direction="row"
						spacing={1}
					>
						<Chip
							className={styles.chip}
							label="React js"
							color="primary"
						/>
						<Chip
							className={styles.chip}
							label="React Native"
							color="primary"
						/>
						<Chip
							className={styles.chip}
							label="Expo"
							color="primary"
						/>
						<Chip
							className={styles.chip}
							label="Next js"
							color="primary"
							sx={{
								bgcolor: "text.primary",
							}}
						/>
						<Chip
							className={styles.chip}
							label="Firebase"
							color="primary"
							sx={{
								bgcolor: "secondary.main",
							}}
						/>
						<Chip
							className={styles.chip}
							label="TypeScript"
							color="primary"
							sx={{
								bgcolor: "info.main",
							}}
						/>
						<Chip
							className={styles.chip}
							label="MERN"
							color="primary"
							sx={{
								bgcolor: "warning.main",
							}}
						/>
					</Stack>
				</section>
			</Paper>
		</Container>
	);
};

export default PR;
