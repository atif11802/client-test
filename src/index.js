import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import allReducers from "./reducers";

const queryClient = new QueryClient();

const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<App />
			</Provider>
		</QueryClientProvider>
	</>
);
