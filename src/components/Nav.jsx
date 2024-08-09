import ArticleList from "./ArticleList";
import { Link } from "react-router-dom";
import TopicList from "./TopicList";

function Nav({ setSearchTerm }) {
	function handleNavigateFromList() {
		setSearchTerm("");
	}
	return (
		<nav>
			<Link onClick={handleNavigateFromList} to="/" element={<ArticleList />}>
				Latest news
			</Link>
			<Link onClick={handleNavigateFromList} to="/topics">
				Topics
			</Link>{" "}
			<Link onClick={handleNavigateFromList} to="/users">
				Users
			</Link>
		</nav>
	);
}

export default Nav;
