import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { articleVoteChange, getArticleById } from "../api";
import CommentExpandable from "./CommentExpandable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function SingleArticle() {
	const [singleArticle, setSingleArticle] = useState({});
	const { article_id } = useParams();
	const [optimisticVotes, setOptimisticVotes] = useState(0);

	useEffect(() => {
		getArticleById(article_id).then((article) => {
			setSingleArticle(article);
		});
	}, [article_id]);

	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function handleUpVote() {
		setOptimisticVotes((currVotes) => {
			return currVotes + 1;
		});
		articleVoteChange(article_id, 1);
	}
	function handleDownVote() {
		setOptimisticVotes((currVotes) => {
			return currVotes + -1;
		});
		articleVoteChange(article_id, -1);
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
				<div id="votes">
					<span>votes: {singleArticle.votes + optimisticVotes}</span>{" "}
					<FontAwesomeIcon
						className="thumb-vote"
						onClick={handleUpVote}
						icon={faThumbsUp}
					/>{" "}
					<FontAwesomeIcon
						className="thumb-vote"
						onClick={handleDownVote}
						icon={faThumbsDown}
					/>{" "}
				</div>
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
