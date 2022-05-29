import { Stack } from "@mui/material";
import React from "react";
import Header from "./components/header/header.component";
import Dashboard from "./components/pages/dashboard/dashboard.component";

function App() {
	return (
		<div className='App'>
			<Header />
			<Stack>
				<Dashboard />
			</Stack>
		</div>
	);
}

export default App;
