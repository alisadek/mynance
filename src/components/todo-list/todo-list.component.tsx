import {
	CalendarMonthRounded,
	CleanHandsRounded,
	ReceiptOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import TodoItem from "../todo/todo-item.component";

const TodoList = () => {
	return (
		<Stack
			flexDirection='column'
			sx={{ height: "40vh", overflowY: "scroll" }}
		>
			<Typography variant='h6'>Your todo-list</Typography>
			<TodoItem
				value={true}
				icon={CleanHandsRounded}
				text='Clean the kitchen'
			/>
			<TodoItem
				value={false}
				icon={CalendarMonthRounded}
				text='Finish your tasks'
			/>
			<TodoItem
				value={false}
				icon={ReceiptOutlined}
				text='Pay the bill'
			/>
		</Stack>
	);
};

export default TodoList;
