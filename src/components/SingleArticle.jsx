import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import CommentExpandable from "./CommentExpandable";
import CommentAdder from "./CommentAdder";
import VoteHandler from "./VoteHandler";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";

function SingleArticle() {
	const [singleArticle, setSingleArticle] = useState({});
	const { article_id } = useParams();
	const [articleId, setArticleId] = useState(article_id);
	const [commentAdded, setCommentAdded] = useState(false);
	const [isloading, setIsloading] = useState(false);

	useEffect(() => {
		setIsloading(true);
		getArticleById(articleId).then((article) => {
			setSingleArticle(article);
			setIsloading(false);
		});
	}, [articleId]);

	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<>
			<section>
				{isloading ? (
					<div className="loading-box">
						<LoadingCircleAnimation />
					</div>
				) : null}
				<Link to="/">{"<- "}back</Link>
				<h3>{singleArticle.title}</h3>

				<h4>
					<Link to={`/topics/${singleArticle.topic}`}>
						#{singleArticle.topic}
					</Link>
				</h4>
				<img id="img-sing-article" src={singleArticle.article_img_url}></img>
				<h4>written by {singleArticle.author}</h4>
				<p>{new Date(singleArticle.created_at).toLocaleDateString()}</p>
				<p id="article-body">{singleArticle.body}</p>
				<VoteHandler articleId={articleId} singleArticle={singleArticle} />
			</section>
			<p id="scroll-to-top" onClick={handleScrollToTop}>
				scroll to top ↑{" "}
			</p>
			<section id="article-comments">
				<h4>Comments</h4>
				<CommentAdder
					setCommentAdded={setCommentAdded}
					commentAdded={commentAdded}
					articleId={articleId}
				/>
				<CommentExpandable articleId={articleId} commentAdded={commentAdded} />
			</section>
		</>
	);
}

export default SingleArticle;
