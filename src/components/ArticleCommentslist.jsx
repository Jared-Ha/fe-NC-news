import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";

function ArticleCommentsList({ article_id }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getCommentsByArticleId(article_id).then((comments) => {
			setComments(comments);
			setIsLoading(false);
		});
	}, [article_id]);

	if (isLoading) {
		return <LoadingCircleAnimation />;
	}

	return (
		<ul id="comments-list">
			{comments.map((comment) => {
				return <CommentCard key={comment.comment_id} comment={comment} />;
			})}
		</ul>
	);
}

export default ArticleCommentsList;
