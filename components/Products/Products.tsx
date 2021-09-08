import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";

import styles from "./Products.module.scss";
import Bus from "./Bus/Bus";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
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
		<Container className="container" maxWidth="xl">
			<Box
				sx={{
					flexGrow: 1,
					bgcolor: "background.paper",
					display: "flex",
					alignItems: "center",
					height: "100%",
				}}
			>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					sx={{ borderRight: 1, borderColor: "divider" }}
				>
					<Tab label="전주 버스 알리미" {...a11yProps(0)} />
					<Tab label="PLAIING" {...a11yProps(1)} />
					<Tab label="CIRCLER" {...a11yProps(2)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<Bus />
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</Box>
		</Container>
	);
};

export default Products;
