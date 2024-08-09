import { Link } from "react-router-dom";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UsernameContext } from "../contexts/Username";

function Header() {
	const { currentUsername } = useContext(UsernameContext);

	return (
		<>
			<section id="site-name-and-user">
				<h1>
					<p id="site-title">
						<Link id="site-title" to="/">
							<FontAwesomeIcon id="nc-logo" icon={faGreaterThan} /> NC News
						</Link>
					</p>
				</h1>

				{!currentUsername ? (
					<>
						{" "}
						<Link to="/users/">
							<button id="button-user-login">Login</button>
						</Link>
					</>
				) : (
					<>
						<p id="username-in-header">
							Welcome,{" "}
							<Link id="username-in-header" to={`/users/${currentUsername}`}>
								<span id="header-current-user">{currentUsername}</span>
							</Link>
						</p>
					</>
				)}
			</section>
			<Nav />
		</>
	);
}

export default Header;
