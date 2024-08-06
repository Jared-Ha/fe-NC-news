import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";

function ArticleCommentsList({ article_id }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getCommentsByArticleId(article_id).then((comments) => {
			setComments(comments);
		});
	}, [article_id]);

	return (
		<ul id="comments-list">
			{comments.map((comment) => {
				return <CommentCard key={comment.comment_id} comment={comment} />;
			})}
		</ul>
	);
}

export default ArticleCommentsList;
