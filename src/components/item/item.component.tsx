import { TextFieldsOutlined } from "@mui/icons-material";
import { Grid, Select, TextField, Typography } from "@mui/material";
import React from "react";

type Props = {
	title: string;
};

const Item = (props: Props) => {
	return (
		<Grid
			container
			alignItems='center'
			direction='row'
			justifyContent='space-between'
			sx={{
				borderRadius: "5px",
				backgroundColor: "#f3f1f3",
				py: 1,
				px: 2,
			}}
		>
			<Grid>
				<Typography variant='h6' sx={{ fontSize: "1rem" }}>
					{props.title}
				</Typography>
			</Grid>
			<Grid
				container
				xs={6}
				direction='row'
				gap={1}
				alignItems='center'
				justifyContent='flex-end'
			>
				<TextField type='number' sx={{ maxWidth: "150px" }} />
				<Select sx={{ width: "200px" }} />
			</Grid>
		</Grid>
	);
};

export default Item;
