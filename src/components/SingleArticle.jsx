import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import ArticleList from "./ArticleList";

function SingleArticle() {
	const [singleArticle, setSingleArticle] = useState({});
	const { article_id } = useParams();

	useEffect(() => {
		getArticleById(article_id).then((article) => {
			setSingleArticle(article);
		});
	}, [article_id]);

	return (
		<>
			<section>
				<h3>{singleArticle.title}</h3>
				<h4>#{singleArticle.topic}</h4>
				<img id="img-sing-article" src={singleArticle.article_img_url}></img>
				<h4>written by {singleArticle.author}</h4>
				<p>{singleArticle.body}</p>
				<Link to="/">{"<- "}back</Link>
			</section>
		</>
	);
}

export default SingleArticle;
