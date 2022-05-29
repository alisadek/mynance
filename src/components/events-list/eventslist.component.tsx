import React from "react";
import { Stack } from "@mui/material";
import EventTile from "../event-tile/event-tile.component";

const EventsList = () => {
	return (
		<Stack
			flexDirection='column'
			gap={2}
			sx={{ height: "40vh", overflowY: "scroll" }}
		>
			<EventTile
				title='Board Meeting'
				date='May 22 2022'
				details='Discuss the financial status of the company'
			/>
			<EventTile
				title='Standup Meeting'
				date='May 22 2022'
				details='Our daily standup meeting'
			/>
			<EventTile
				title='Big Event'
				date='May 22 2022'
				details='This is the biggest event of the year'
			/>
		</Stack>
	);
};

export default EventsList;
