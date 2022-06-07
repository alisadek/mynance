import { Stack, Typography } from "@mui/material";
import React from "react";
import ItemsTable from "../../components/items-table/items-table.component";
import TabsGroup from "../../components/tabs-group/tabs-group.component";
import TabTypes from "../../components/tabs-group/tabs-group.types";

const tabs: TabTypes[] = [
	{
		index: 0,
		value: "INCOME",
		component: <ItemsTable />,
	},
	{
		index: 1,
		value: "HOUSEHOLD BILLS",
		component: <ItemsTable />,
	},
	{
		index: 2,
		value: "LIVING COSTS",
		component: <ItemsTable />,
	},
];

const Budgets = () => {
	return (
		<>
			<Stack sx={{ ml: 6, mt: 6 }}>
				<Typography sx={{ mb: 2 }} variant='h4'>
					Personal Budget
				</Typography>
				<TabsGroup tabs={tabs} />
			</Stack>
		</>
	);
};

export default Budgets;
