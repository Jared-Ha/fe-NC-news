import { useContext, useState } from "react";
import { UsernameContext } from "../contexts/Username";
import { deleteUsersComment } from "../api";

function CommentCard({ comment }) {
	const { username } = useContext(UsernameContext);
	const [optimisticDeleted, setOptimisticDeleted] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);
	const comment_id = comment.comment_id;

	function handleDeleteClick() {
		setOptimisticDeleted(true);
		deleteUsersComment(comment_id)
			.then(() => {
				setIsDeleted(true);
				setOptimisticDeleted(false);
			})
			.catch(() => {
				setOptimisticDeleted(false);
			});
	}
	return (
		<li id="comments-list-item">
			{isDeleted ? (
				<p id="comment-delete-message">Comment deleted</p>
			) : optimisticDeleted ? (
				<p id="comment-delete-message">*deleting your comment...</p>
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
