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
import styles from "./MernApp.module.scss";

const MernApp = () => {
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
		<div className={styles.mernContainer}>
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
							MERN Stack을 이용한 간단한 포스팅
							어플리케이션입니다.
						</Typography>
						<Typography gutterBottom>
							<Link
								href="https://mauv-mern-study.netlify.app/"
								target="_blank"
								underline="hover"
							>
								APP 링크
							</Link>{" "}
							&nbsp;{" "}
							<Link
								href="https://github.com/Mauv-hub/JsMastery-MERN-project"
								target="_blank"
								underline="hover"
							>
								소스 코드
							</Link>
						</Typography>
						<Stack
							className={styles.techStack}
							direction="row"
							spacing={1}
						>
							<Chip
								className={styles.chip}
								label="Mongo DB"
								color="primary"
								sx={{
									bgcolor: "success.main",
								}}
							/>
							<Chip
								className={styles.chip}
								label="Express"
								color="primary"
								sx={{
									bgcolor: "text.primary",
								}}
							/>
							<Chip
								className={styles.chip}
								label="React js"
								color="primary"
							/>
							<Chip
								className={styles.chip}
								label="Node js"
								color="primary"
								sx={{
									bgcolor: "success.main",
								}}
							/>
							<Chip
								className={styles.chip}
								label="Heroku"
								color="primary"
								sx={{
									bgcolor: "secondary.main",
								}}
							/>
							<Chip
								className={styles.chip}
								label="Netlify"
								color="primary"
								sx={{
									bgcolor: "info.main",
								}}
							/>
						</Stack>
					</Box>
				</Popover>
				<Iframe
					className={styles.iframe}
					height="90%"
					url="https://mauv-mern-study.netlify.app"
					id="myId"
					position="relative"
				/>
			</Box>
		</div>
	);
};

export default MernApp;
