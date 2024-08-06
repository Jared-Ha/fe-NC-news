import ArticleList from "./ArticleList";
import { Link } from "react-router-dom";
import TopicList from "./TopicList";

function Nav() {
	return (
		<nav>
			<Link to="/" element={<ArticleList />}>
				Latest news
			</Link>{" "}
			<Link to="/topics" element={<TopicList />}>
				Topics
			</Link>{" "}
			<Link to="/users" element={<TopicList />}>
				Users
			</Link>
		</nav>
	);
}

export default Nav;
