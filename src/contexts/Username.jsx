import { createContext, useState, useEffect } from "react";

export const UsernameContext = createContext();

export const UsernameProvider = (props) => {
	const [currentUsername, setCurrentUsername] = useState(
		() => localStorage.getItem("username") || ""
	);
	useEffect(() => {
		localStorage.setItem("username", currentUsername);
	}, [currentUsername]);
	return (
		<UsernameContext.Provider value={{ currentUsername, setCurrentUsername }}>
			{props.children}
		</UsernameContext.Provider>
	);
};
