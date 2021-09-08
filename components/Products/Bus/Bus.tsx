import { Container } from "@mui/material";
import React from "react";

const Bus = (): React.ReactElement => {
	return (
		<Container maxWidth="xl">
			<a
				href="https://play.google.com/store/apps/details?id=com.hyeonmin.transitapplication&hl=ko&gl=US"
				target="_blank"
				rel="search noreferrer"
			>
				전주 시내버스 정거장 예약 알리미
			</a>
		</Container>
	);
};

export default Bus;
