import { getArticles } from "../api";
import { useEffect, useState } from "react";
import Articlecard from "./ArticleCard";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";

function ArticleList({ searchTerm }) {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticles(searchTerm).then((articles) => {
			setArticles(articles);
			setIsLoading(false);
		});
	}, [searchTerm]);

	if (isLoading) {
		return <LoadingCircleAnimation />;
	}

	return (
		<>
			<ul>
				{articles.map((article) => {
					return <Articlecard key={article.article_id} article={article} />;
				})}
			</ul>
		</>
	);
}

export default ArticleList;
