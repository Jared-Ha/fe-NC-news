import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import CommentExpandable from "./CommentExpandable";

function SingleArticle() {
	const [singleArticle, setSingleArticle] = useState({});
	const { article_id } = useParams();
	console.log(article_id);

	useEffect(() => {
		getArticleById(article_id).then((article) => {
			setSingleArticle(article);
		});
	}, [article_id]);

	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<>
			<section>
				<Link to="/">{"<- "}back</Link>
				<h3>{singleArticle.title}</h3>
				<h4>#{singleArticle.topic}</h4>
				<img id="img-sing-article" src={singleArticle.article_img_url}></img>
				<h4>written by {singleArticle.author}</h4>
				<p>{new Date(singleArticle.created_at).toLocaleDateString()}</p>
				<p>{singleArticle.body}</p>
			</section>
			<p id="scroll-to-top" onClick={handleScrollToTop}>
				scroll to top ↑{" "}
			</p>
			<section id="article-comments">
				<h4>Comments</h4>
				<CommentExpandable article_id={singleArticle.article_id} />
			</section>
		</>
	);
}

export default SingleArticle;
