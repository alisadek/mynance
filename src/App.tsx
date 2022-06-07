import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Budgets from "./routes/budgets/budgets.component";
import Dashboard from "./routes/dashboard/dashboard.component";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index element={<Dashboard />}></Route>
					<Route path='budgets' element={<Budgets />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
