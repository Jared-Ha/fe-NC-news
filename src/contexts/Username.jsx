import { createContext, useState } from "react";

export const UsernameContext = createContext();

export const UsernameProvider = (props) => {
	const [username, setUsername] = useState("jessjelly");
	return (
		<UsernameContext.Provider value={{ username, setUsername }}>
			{props.children}
		</UsernameContext.Provider>
	);
};
