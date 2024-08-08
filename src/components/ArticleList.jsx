import { getArticles } from "../api";
import { useEffect, useState } from "react";
import Articlecard from "./ArticleCard";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";
import { useParams } from "react-router-dom";

function ArticleList({ searchTerm, topic }) {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticles(topic).then((articles) => {
			setArticles(articles);
			setIsLoading(false);
		});
	}, [topic]);

	if (isLoading) {
		return (
			<div className="loading-box">
				<LoadingCircleAnimation />
			</div>
		);
	}
	return (
		<>
			{topic ? (
				<h2>Latest {topic[0].toUpperCase() + topic.slice(1)} News</h2>
			) : (
				<h2>Latest News</h2>
			)}
			<ul id="art-list">
				{articles.map((article) => {
					return <Articlecard key={article.article_id} article={article} />;
				})}
			</ul>
		</>
	);
}

export default ArticleList;
