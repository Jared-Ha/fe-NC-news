import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import LoadingCircleAnimation from "../animations/Loading-Circle.jsx";

function ArticleCommentsList({ articleId, commentAdded }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getCommentsByArticleId(articleId).then((comments) => {
			setComments(comments);
			setIsLoading(false);
		});
	}, [articleId, commentAdded]);

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
