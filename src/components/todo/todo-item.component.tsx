import {
	CalendarMonthRounded,
	ViewAgenda,
	ViewAgendaRounded,
} from "@mui/icons-material";
import { Button, Checkbox, Chip, Icon, Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

type TodoProps = {
	text: string;
	value?: boolean;
	icon: FunctionComponent;
};

const TodoItem = ({ text, value, icon }: TodoProps) => {
	return (
		<Stack flexDirection='row' alignItems='center'>
			<Checkbox value={value} />
			<Icon component={icon} />
			<Typography variant='body1'>{text}</Typography>
		</Stack>
	);
};

export default TodoItem;
