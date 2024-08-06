import { useState } from "react";
import ArticleCommentsList from "./ArticleCommentslist";

function CommentExpandable({ article_id }) {
	const [isShowing, setIsShowing] = useState(true);

	function handleClick() {
		setIsShowing(!isShowing);
	}

	return (
		<>
			<p id="toggle-comments" onClick={handleClick}>
				{isShowing ? "↑  Hide" : "↓ Show"} comments
			</p>
			{isShowing ? <ArticleCommentsList article_id={article_id} /> : null}
		</>
	);
}

export default CommentExpandable;
