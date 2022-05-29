import { Stack } from "@mui/material";
import React from "react";
import RightColumn from "../../right-column/right-column.component";
import TileGroup from "../../tile-group/tile-group.component";

const Dashboard = () => {
	return (
		<Stack flexDirection='row'>
			<Stack sx={{ padding: "20px", width: "75vw" }}>
				<TileGroup />
			</Stack>
			<RightColumn />
		</Stack>
	);
};

export default Dashboard;
