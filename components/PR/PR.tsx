import React from "react";
import { Container, Paper, Chip, Stack, Typography, Link } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import classNames from "classnames";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import styles from "./PR.module.scss";

function PR(): React.ReactElement {
	return (
		<main>
			<Container
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
				<Paper
					className={classNames(
						styles.PRInnerContainer,
						"PRInnerContainer"
					)}
					sx={{
						padding: "2rem 1rem",
						display: "flex",
						justifyContent: "space-evenly",
						flexDirection: "row",
						width: "80%",
						height: "85%",

						borderRadius: "2rem",
					}}
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
						<a
							href="https://github.com/mauvpark"
							target="_blank"
							rel="noreferrer"
						>
							HYEONMIN PARK
						</a>
						<Typography>
							π 2020λ Java μ± λ κΆκ³Ό ν¨κ» κ°λ° κ³΅λΆ μμ
						</Typography>
						<Typography>
							π λͺ¨λ₯΄λ κ±΄ λ  λκΉμ§ νλ μ±κ²©μ μμ μ
						</Typography>
						<Typography>
							π μλ‘μ΄ κΈ°μ μ λμμμ΄ νμνλ μ
						</Typography>
						<Typography>π μ±μ₯ μκ΅¬κ° ν¬μ² ν μ</Typography>
						<Typography>
							π μ‘΄κ²½νλ μ€μΉλ: Stackoverflow
						</Typography>
						<Typography
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<GitHubIcon color="primary" fontSize="small" />
							&nbsp;
							<Link
								href="https://github.com/mauvpark"
								target="_blank"
								style={{
									margin: 0,
									padding: 0,
									fontSize: "1rem",
								}}
								underline="hover"
							>
								Welcome to Mauv-hub!
							</Link>
						</Typography>
						<Typography
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<AlternateEmailIcon
								color="primary"
								fontSize="small"
							/>
							&nbsp;mauvpark@gmail.com
						</Typography>
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
		</main>
	);
}

export default PR;
