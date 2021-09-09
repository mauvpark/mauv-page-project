import React, { useState } from "react";
import { Box, Button, Chip, Popover, Stack, Typography } from "@mui/material";
import Iframe from "react-iframe";

import { theme } from "../../../styles/theme";
import styles from "./Circler.module.scss";

const Circler = (): React.ReactElement => {
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
		<div className={styles.circlerContainer}>
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
					sx={{ width: "100%" }}
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
							PLAIING 계정과 연동 되는 포스팅 중점의 소셜
							어플리케이션
						</Typography>
						<Typography gutterBottom>
							- 2021년 개발 및 출시
						</Typography>
						<Typography gutterBottom>
							- 웹 포스팅 기능 알고리즘 구현.
						</Typography>
						<Typography gutterBottom>
							- Tiptap을 이용한 Rich text editor 구현
						</Typography>
						<Typography gutterBottom>
							- React bootstrap library를 기반으로 mobile에서도
							최적화 된 웹앱 개발 경험 축적
						</Typography>
						<Typography gutterBottom>
							- Next JS를 통한 SSR 경험
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
								label="MobX"
								color="primary"
								sx={{
									bgcolor: theme.palette.secondary.light,
								}}
							/>
						</Stack>
					</Box>
				</Popover>
				<Iframe
					className={styles.iframe}
					height="90%"
					url="https://circler.vercel.app/"
					id="myId"
					position="relative"
				/>
			</Box>
		</div>
	);
};

export default Circler;
