import ArticleList from "./ArticleList";
import SelectSortBy from "./SelectSortyby.jsx";
import { useSearchParams } from "react-router-dom";
import SelectOrderBy from "./SelectOrderBy.jsx";

function ArticleProvider({ searchTerm, topic }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const sortByQuery = searchParams.get("sort_by");
	const orderQuery = searchParams.get("order");

	function setSortBy(columName) {
		const newParams = new URLSearchParams(searchParams);
		newParams.set("sort_by", columName);
		setSearchParams(newParams);
	}
	function setOrderBy(direction) {
		const newParams = new URLSearchParams(searchParams);
		newParams.set("order", direction);
		setSearchParams(newParams);
	}

	return (
		<>
			{topic ? (
				<h2>Latest {topic[0].toUpperCase() + topic.slice(1)} News</h2>
			) : (
				<h2>Latest News</h2>
			)}
			<div id="article-list-sorting">
				<SelectSortBy setSortBy={setSortBy} />
				<SelectOrderBy setOrderBy={setOrderBy} />
			</div>
			<ArticleList
				topic={topic}
				sortByQuery={sortByQuery}
				orderQuery={orderQuery}
			/>
		</>
	);
}

export default ArticleProvider;
