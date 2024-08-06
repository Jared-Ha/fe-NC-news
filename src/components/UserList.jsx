import { useContext } from "react";
import { UsernameContext } from "../contexts/Username";

function UserList() {
	const { username } = useContext(UsernameContext);

	const { setUsername } = useContext(UsernameContext);
	return <>User list</>;
}

export default UserList;
