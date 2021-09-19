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

import styles from "./SocketIoChatApp.module.scss";

const SocketIoChatApp = (): React.ReactElement => {
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
		<div className={styles.sicaContainer}>
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
							Socket IO를 이용한 간단한 채팅 어플리케이션
						</Typography>
						<Typography gutterBottom>
							<Link
								href="https://mauv-socket-io-app.netlify.app/"
								target="_blank"
								underline="hover"
							>
								APP 링크
							</Link>{" "}
							&nbsp;{" "}
							<Link
								href="https://github.com/mauvpark/socket-io-chat-app"
								target="_blank"
								underline="hover"
							>
								소스 코드
							</Link>
						</Typography>
						<Typography gutterBottom>🌟 사용방법</Typography>
						<Typography gutterBottom>
							&nbsp;&nbsp;🤹🏻 테스트를 원하시는 분은 APP 링크를
							눌러 두 개의 창에 같은 Room을 적어 주세요.
						</Typography>
						<Typography gutterBottom>
							&nbsp;&nbsp;🤹🏻‍♀️ 혹은 친구와 방 번호를 공유해
							테스트해보세요.
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
								label="Socket IO"
								color="primary"
								sx={{
									bgcolor: "text.primary",
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
					url="https://mauv-socket-io-app.netlify.app/"
					id="myId"
					position="relative"
				/>
			</Box>
		</div>
	);
};

export default SocketIoChatApp;
