import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";

import styles from "./Projects.module.scss";
import SocketIoChatApp from "./Socket-io-chat-app/SocketIoChatApp";
import MernApp from "./Mern-app/MernApp";
import TicTacToe from "./Tic-Tac-Toe/TicTacToe";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

// ! hidden은 겹쳐진 컴포넌트가 존재할 경우, css를 망가뜨림. 그러므로 display "none"을 사용해야 함.

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			className={styles.tabPanel}
			style={value !== index ? { display: "none" } : {}}
			role="tabpanel"
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box
					sx={{
						width: "100%",
						height: "100%",
					}}
				>
					{children}
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const Projects = (): React.ReactElement => {
	const [value, setValue] = useState(0);

	const handleChange = (event: any, newValue: number) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<header>
				<Typography className={styles.topic} variant="h5">
					PROJECTS
				</Typography>
			</header>
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
					<Box
						className="productsContainer"
						sx={{
							bgcolor: "background.paper",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
							height: "85%",
							borderRadius: "2rem",
							boxShadow: 3,
						}}
					>
						<Tabs
							className="tabs"
							orientation="vertical"
							variant="scrollable"
							value={value}
							onChange={handleChange}
							aria-label="Vertical tabs example"
							textColor="inherit"
							sx={{
								borderRight: 1,
								borderColor: "divider",
								width: "10rem",
							}}
						>
							<Tab label="Tic-Tac-Toe" {...a11yProps(0)} />
							<Tab label="Socket IO chat app" {...a11yProps(1)} />
							<Tab label="MERN post app" {...a11yProps(2)} />
						</Tabs>
						<TabPanel value={value} index={0}>
							<TicTacToe />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<SocketIoChatApp />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<MernApp />
						</TabPanel>
					</Box>
				</Container>
			</main>
		</React.Fragment>
	);
};

export default Projects;
