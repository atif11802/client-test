import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { SignInRed } from "./actions/index";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem("Token")) {
			dispatch(SignInRed());
		}
	}, [dispatch]);

	return (
		<>
			<BrowserRouter>
				<Navbar />
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
			</BrowserRouter>
			<ToastContainer />
			<Footer />
		</>
	);
};

export default App;
