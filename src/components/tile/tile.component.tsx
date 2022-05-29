import { Box, Card, Icon, Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import "./tile.styles.css";

type TileProps = {
	title: string;
	amount: number;
	icon: FunctionComponent;
};

const Tile = ({ title, amount, icon }: TileProps) => {
	return (
		<Box className='tile' sx={{ padding: "20px", borderRadius: "20px" }}>
			<Stack flexDirection='column' gap={1}>
				<Icon
					component={icon}
					sx={{ fontSize: "2rem", color: "primary" }}
				/>
				<Typography variant='h6'>{amount}LE</Typography>
				<Typography variant='body1'>{title}</Typography>
			</Stack>
		</Box>
	);
};

export default Tile;
