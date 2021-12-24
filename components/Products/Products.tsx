import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";

import styles from "./Products.module.scss";
import Bus from "./Bus/Bus";
import Plaiing from "./Plaiing/Plaiing";
import Circler from "./Circler/Circler";

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

const Products = (): React.ReactElement => {
	const [value, setValue] = useState(0);

	const handleChange = (event: any, newValue: number) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<header>
				<Typography className={styles.topic} variant="h5">
					PRODUCTS
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
							<Tab label="버스 알리미" {...a11yProps(0)} />
							<Tab label="PLAIING" {...a11yProps(1)} />
							<Tab label="CIRCLER" {...a11yProps(2)} />
						</Tabs>
						<TabPanel value={value} index={0}>
							<Bus />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Plaiing />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<Circler />
						</TabPanel>
					</Box>
				</Container>
			</main>
		</React.Fragment>
	);
};

export default Products;
