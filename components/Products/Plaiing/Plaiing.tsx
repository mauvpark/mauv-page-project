import React, { useState } from "react";
import {
	Box,
	Button,
	Chip,
	MobileStepper,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { theme } from "../../../styles/theme";
import styles from "./Plaiing.module.scss";
import { images } from "./Images";

function UnMemoizedText() {
	return (
		<Box>
			<Typography
				gutterBottom
				sx={{
					fontWeight: "bold",
				}}
			>
				1:1 채팅, 친구관리, 단체채팅을 지원하는 익명 채팅 어플리케이션.
			</Typography>
			<Typography gutterBottom>- 2020년 개발, 2021년 출시</Typography>
			<Typography gutterBottom>
				- Gifted Chat library와 Firebase를 이용한 개인 및 단체 채팅
				알고리즘 개발
			</Typography>
			<Typography gutterBottom>
				- Expo를 이용한 React native 개발 경험 축적
			</Typography>
			<Typography gutterBottom>
				- React 구조 및 Hook에 대한 이해 축적
			</Typography>
			<Typography gutterBottom>
				- Redux 및 Context state manager 경험 축적
			</Typography>
			<Stack className={styles.techStack} direction="row" spacing={1}>
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
				<Chip className={styles.chip} label="Expo" color="primary" />
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
					label="Redux"
					color="primary"
					sx={{
						bgcolor: theme.palette.primary.main,
					}}
				/>
			</Stack>
		</Box>
	);
}

const MemoizedText = React.memo(UnMemoizedText);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Plaiing(): React.ReactElement {
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<div className={styles.plaiingContainer}>
			<Box sx={{ maxWidth: 400, flexGrow: 1, pb: 2 }}>
				<a
					href="https://play.google.com/store/apps/details?id=com.mauv.plaiing&hl=ko&gl=US"
					target="_blank"
					rel="search noreferrer"
				>
					PLAIING!
				</a>
				<Paper
					square
					elevation={0}
					sx={{
						display: "flex",
						alignItems: "center",
						height: 50,
						mt: 2,
						pl: 2,
						bgcolor: "background.default",
					}}
				>
					<Typography>{images[activeStep].label}</Typography>
				</Paper>
				<AutoPlaySwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{images.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Box
									component="img"
									sx={{
										height: 255,
										display: "block",
										maxWidth: 400,
										overflow: "hidden",
										width: "100%",
										objectFit: "contain",
									}}
									src={step.imgPath}
									alt={step.label}
								/>
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							Next
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}
						>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</Box>
			<MemoizedText />
		</div>
	);
}

export default Plaiing;
