import { useContext, useState } from "react";
import { UsernameContext } from "../contexts/Username";
import { deleteUsersComment } from "../api";

function CommentCard({ comment }) {
	const { username } = useContext(UsernameContext);
	const [optimisticDeleted, setOptimisticDeleted] = useState(false);
	const comment_id = comment.comment_id;

	function handleDeleteClick() {
		setOptimisticDeleted(true);
		deleteUsersComment(comment_id)
			.then(() => {})
			.catch(() => {
				setIsDeleted(false);
			});
	}
	return (
		<li id="comments-list-item">
			{optimisticDeleted ? (
				<p id="comment-deleted">* comment deleted</p>
			) : (
				<>
					<h5>{comment.author}</h5>
					<p>{comment.body}</p>
					<p id="comment-date">
						{new Date(comment.created_at).toLocaleDateString()}
					</p>
					{username === comment.author ? (
						<button onClick={handleDeleteClick}>Delete comment</button>
					) : null}
				</>
			)}
		</li>
	);
}

export default CommentCard;
