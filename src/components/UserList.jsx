import { useContext } from "react";
import { UsernameContext } from "../contexts/Username";
import { useEffect, useState } from "react";
import { getUsers } from "../api";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";
import UserCard from "./UserCard.jsx";

function UserList() {
	const { currentUsername, setCurrentUsername } = useContext(UsernameContext);
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getUsers().then((users) => {
			setUsers(users);
			setIsLoading(false);
		});
	}, [currentUsername]);

	if (isLoading) {
		return (
			<div className="loading-box">
				<LoadingCircleAnimation />
			</div>
		);
	}

	return (
		<>
			<h3>List of Users</h3>
			<ul>
				{users.map((user) => {
					return (
						<UserCard
							key={user.username}
							currentUsername={currentUsername}
							user={user}
							setCurrentUsername={setCurrentUsername}
						/>
					);
				})}
			</ul>
		</>
	);
}

export default UserList;
