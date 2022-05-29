import { Stack, Typography, Box } from "@mui/material";
import React from "react";

type EventTileProps = {
	title: string;
	date: string;
	details: string;
};

const EventTile = ({ title, date, details }: EventTileProps) => {
	return (
		<Box
			sx={{
				backgroundColor: "white",
				borderRadius: "15px",
				padding: "15px",
			}}
		>
			<Stack flexDirection='column'>
				<Typography variant='h6'>{title}</Typography>
				<Typography variant='body1'>{date}</Typography>
				<Typography variant='body2'>{details}</Typography>
			</Stack>
		</Box>
	);
};

export default EventTile;
