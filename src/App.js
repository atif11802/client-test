import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("Token")) {
			setAuth(true);
		}
	}, []);

	return (
		<>
			<BrowserRouter>
				<Navbar auth={auth} setAuth={setAuth} />
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
								<Profile setAuth={setAuth} />
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
