function CommentCard({ comment }) {
	return (
		<li id="comments-list-item">
			<h5>{comment.author}</h5>
			<p>{new Date(comment.created_at).toLocaleDateString()}</p>
			<p>{comment.body}</p>
		</li>
	);
}

export default CommentCard;
