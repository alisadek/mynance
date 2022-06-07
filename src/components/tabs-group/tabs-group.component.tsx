import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabTypes from "./tabs-group.types";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

type TabGroupProps = {
	tabs: TabTypes[];
};

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function TabsGroup({ tabs }: TabGroupProps) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					{tabs.map((tab: TabTypes) => (
						<Tab
							key={tab.value}
							label={tab.value}
							{...a11yProps(tab.index)}
						/>
					))}
				</Tabs>
			</Box>
			{tabs.map((tab) => (
				<TabPanel key={tab.value} value={value} index={tab.index}>
					{tab.component}
				</TabPanel>
			))}
		</Box>
	);
}
