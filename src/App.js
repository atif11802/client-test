import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";

const App = () => {
	return (
		<>
			<Navbar />
			{/* <Body>
				<Home />
			</Body> */}
			<Routes>
				<Route
					path='/'
					element={
						<Body>
							<Home />
						</Body>
					}
				/>
				<Route
					path='/product/:id'
					element={
						<Body>
							<ProductPage />
						</Body>
					}
				/>
				<Route
					path='/profile'
					element={
						<Body>
							<Profile />
						</Body>
					}
				/>
			</Routes>

			<Footer />
		</>
	);
};

export default App;
