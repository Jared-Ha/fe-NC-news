import { useState } from "react";
import ArticleCommentsList from "./ArticleCommentslist";

function CommentExpandable({ articleId, commentAdded }) {
	const [isShowing, setIsShowing] = useState(true);

	function handleClick() {
		setIsShowing(!isShowing);
	}

	return (
		<>
			<p id="toggle-comments" onClick={handleClick}>
				{isShowing ? "↑  Hide" : "↓ Show"} comments
			</p>
			{isShowing ? (
				<ArticleCommentsList
					articleId={articleId}
					commentAdded={commentAdded}
				/>
			) : null}
		</>
	);
}

export default CommentExpandable;
