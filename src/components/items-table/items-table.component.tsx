import { Grid } from "@mui/material";
import React from "react";
import Item from "../item/item.component";

const INCOMEITEMS = [
	"Salary (After Tax)",
	"Income from self-employment",
	"Statutory Sick Pay",
	"Statutory Maternity Pay",
];

const ItemsTable = () => {
	return (
		<Grid container direction='column' gap={2}>
			{INCOMEITEMS.map((item: string) => (
				<Item title={item} />
			))}
		</Grid>
	);
};

export default ItemsTable;
