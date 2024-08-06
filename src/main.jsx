import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UsernameProvider } from "./contexts/Username";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<UsernameProvider>
			<App />
		</UsernameProvider>
	</BrowserRouter>
);
