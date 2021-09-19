import React, { useState } from "react";
import {
	Box,
	Button,
	Chip,
	Link,
	Popover,
	Stack,
	Typography,
} from "@mui/material";
import Iframe from "react-iframe";

import { theme } from "../../../styles/theme";
import styles from "./TicTacToe.module.scss";

const TicTacToe = (): React.ReactElement => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div className={styles.tictactoeContainer}>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Button
					sx={{ width: "80%" }}
					aria-describedby={id}
					onClick={handleClick}
				>
					여기를 클릭하세요.
				</Button>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
				>
					<Box
						sx={{
							m: "1rem",
						}}
					>
						<Typography
							gutterBottom
							sx={{
								fontWeight: "bold",
							}}
						>
							Tic-Tac-Toe
						</Typography>
						<Typography gutterBottom>
							<Link
								href="https://mauvpark.github.io/tic-tac-toe/"
								target="_blank"
								underline="hover"
							>
								APP 링크
							</Link>{" "}
							&nbsp;{" "}
							<Link
								href="https://github.com/mauvpark/tic-tac-toe"
								target="_blank"
								underline="hover"
							>
								소스 코드
							</Link>
						</Typography>
						<Typography gutterBottom>🌟 사용방법</Typography>
						<Typography gutterBottom>
							&nbsp;&nbsp;🤹🏻‍♀️ Minimax가 적용된 AI와 겨루어 보세요 !
						</Typography>
						<Stack
							className={styles.techStack}
							direction="row"
							spacing={1}
						>
							<Chip
								className={styles.chip}
								label="HTML"
								color="primary"
								sx={{
									bgcolor: theme.palette.secondary.main,
								}}
							/>
							<Chip
								className={styles.chip}
								label="Vanilla JS"
								color="primary"
								sx={{
									bgcolor: "warning.main",
								}}
							/>
							<Chip
								className={styles.chip}
								label="Webpack"
								color="primary"
							/>
						</Stack>
					</Box>
				</Popover>
				<Iframe
					className={styles.iframe}
					height="90%"
					url="https://mauvpark.github.io/tic-tac-toe/"
					id="myId"
					position="relative"
				/>
			</Box>
		</div>
	);
};

export default TicTacToe;
