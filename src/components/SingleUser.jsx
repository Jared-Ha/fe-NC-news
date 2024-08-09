import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserByUsername } from "../api";
import { useContext } from "react";
import { UsernameContext } from "../contexts/Username";

function SingleUser() {
	const { username } = useParams();
	const { currentUsername, setCurrentUsername } = useContext(UsernameContext);
	const [user, setUser] = useState({});

	useEffect(() => {
		getUserByUsername(username).then((user) => {
			setUser(user);
		});
	}, []);

	function handleLogin() {
		setCurrentUsername(user.username);
	}
	function handleLogout() {
		setCurrentUsername("");
	}

	return (
		<>
			<h3>{user.username}'s Profile</h3>
			<ul>
				<section id="user-card">
					<Link id="user-avatar" to={`/users/${user.username}`}>
						<img src={user.avatar_url} alt={`${user.username}'s avatar`} />
					</Link>
					<Link id="username-in-user-card" to={`/users/${user.username}`}>
						<li>{user.username}</li>
					</Link>
					<li id="name-in-user-card">{user.name}</li>
					{currentUsername === user.username ? (
						<li id="login-in-user-card">
							<button onClick={handleLogout} id="button-user-login">
								Logout
							</button>
						</li>
					) : (
						<li id="login-in-user-card">
							<button onClick={handleLogin} id="button-user-login">
								Login
							</button>
						</li>
					)}
				</section>
			</ul>
		</>
	);
}
export default SingleUser;
