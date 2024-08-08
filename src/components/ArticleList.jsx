import { getArticles } from "../api";
import { useEffect, useState } from "react";
import Articlecard from "./ArticleCard";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";

function ArticleList({ searchTerm, topic, sortByQuery, orderQuery }) {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticles(topic, sortByQuery, orderQuery).then((articles) => {
			setArticles(articles);
			setIsLoading(false);
		});
	}, [topic, sortByQuery, orderQuery]);

	if (isLoading) {
		return (
			<div className="loading-box">
				<LoadingCircleAnimation />
			</div>
		);
	}
	return (
		<>
			<ul id="art-list">
				{articles.map((article) => {
					return <Articlecard key={article.article_id} article={article} />;
				})}
			</ul>
		</>
	);
}

export default ArticleList;
