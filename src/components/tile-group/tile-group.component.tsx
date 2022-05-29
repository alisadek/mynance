import React from "react";
import { Stack } from "@mui/material";
import Tile from "../tile/tile.component";
import {
	AccountBalanceOutlined,
	CreditCardOutlined,
	MonetizationOnOutlined,
} from "@mui/icons-material";

const TileGroup = () => {
	return (
		<Stack flexDirection='row' justifyContent='center' gap={3}>
			<Tile icon={MonetizationOnOutlined} title='OUTCOME' amount={5000} />
			<Tile
				icon={CreditCardOutlined}
				title='CARD SPENDING'
				amount={7000}
			/>
			<Tile icon={AccountBalanceOutlined} title='INCOME' amount={1000} />
		</Stack>
	);
};
export default TileGroup;
