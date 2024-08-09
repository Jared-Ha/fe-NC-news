import { Link } from "react-router-dom";

function UserCard({ user, currentUsername, setCurrentUsername }) {
	function handleLogin() {
		setCurrentUsername(user.username);
	}
	function handleLogout() {
		setCurrentUsername("");
	}

	return (
		<>
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
		</>
	);
}

export default UserCard;
