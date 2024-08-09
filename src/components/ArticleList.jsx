import { getArticles } from "../api";
import { useEffect, useState } from "react";
import Articlecard from "./ArticleCard";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";

function ArticleList({ searchTerm, topic, sortByQuery, orderQuery }) {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setIsLoading(true);
		setError("");
		getArticles(topic, sortByQuery, orderQuery, searchTerm)
			.then((articles) => {
				setArticles(articles);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.response);
				setIsLoading(false);
				setError(err.response);
			});
	}, [topic, sortByQuery, orderQuery, searchTerm]);

	if (isLoading) {
		return (
			<div className="loading-box">
				<LoadingCircleAnimation />
			</div>
		);
	}

	if (error) {
		return (
			<p className="page-error">
				* {error.data.msg} for '{searchTerm}'
			</p>
		);
	}

	return (
		<>
			{searchTerm ? <h4>Showing results for '{searchTerm}'</h4> : null}
			<ul id="art-list">
				{articles.map((article) => {
					return <Articlecard key={article.article_id} article={article} />;
				})}
			</ul>
		</>
	);
}

export default ArticleList;
