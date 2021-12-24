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
import { useTheme } from "@mui/material/styles";

import styles from "./Bus.module.scss";
import { images } from "./Images.js";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function UnMemoizedText() {
	return (
		<Box>
			<Typography
				gutterBottom
				sx={{
					fontWeight: "bold",
				}}
			>
				시내버스 번호를 조회하여 원하는 목적지에서 예약 알림을 보내주는
				어플리케이션
			</Typography>
			<Typography gutterBottom>- 2020년 개발 및 출시</Typography>
			<Typography gutterBottom>
				- 사용자의 출발지 버스 번호를 호출하여 목적지까지 추적하는
				알고리즘 개발
			</Typography>
			<Stack className={styles.techStack} direction="row" spacing={1}>
				<Chip
					className={styles.chip}
					label="Java"
					color="primary"
					sx={{
						bgcolor: "secondary.main",
					}}
				/>
				<Chip
					className={styles.chip}
					label="Rest API"
					color="primary"
				/>
			</Stack>
		</Box>
	);
}

const MemoizedText = React.memo(UnMemoizedText);

function Bus(): React.ReactElement {
	const theme = useTheme();
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
		<div className={styles.busContainer}>
			<Box
				sx={{
					maxWidth: 400,
					flexGrow: 1,
					pb: 2,
				}}
			>
				<a
					href="https://play.google.com/store/apps/details?id=com.hyeonmin.transitapplication&hl=ko&gl=US"
					target="_blank"
					rel="search noreferrer"
				>
					전주 시내버스 정거장 예약 알리미
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

export default Bus;
