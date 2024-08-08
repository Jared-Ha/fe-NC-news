import { Link } from "react-router-dom";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<>
			<h1>
				<p>
					<Link id="site-heading" to="/">
						<FontAwesomeIcon id="nc-logo" icon={faGreaterThan} /> NC News
					</Link>
				</p>
			</h1>
			<Nav />
		</>
	);
}

export default Header;
