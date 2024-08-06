import { getArticles } from "../api";
import { useEffect, useState } from "react";
import Articlecard from "./ArticleCard";

function ArticleList({ searchTerm }) {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles(searchTerm).then((articles) => {
			setArticles(articles);
		});
	}, [searchTerm]);

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
