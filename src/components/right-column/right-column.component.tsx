import { Stack } from "@mui/material";
import React from "react";
import EventsList from "../events-list/eventslist.component";
import TodoList from "../todo-list/todo-list.component";

const RightColumn = () => {
	return (
		<Stack
			flexDirection='column'
			sx={{
				backgroundColor: "#f2f2fc",
				width: "21vw",
				mt: "20px",
				borderRadius: "15px",
				padding: "15px",
				height: "85vh",
			}}
		>
			<TodoList />
			<EventsList />
		</Stack>
	);
};

export default RightColumn;
