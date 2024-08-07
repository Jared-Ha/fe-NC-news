import { useContext, useState } from "react";
import { UsernameContext } from "../contexts/Username";
import { postCommentByUsername } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function CommentAdder({ articleId, setCommentAdded, commentAdded }) {
	const { username } = useContext(UsernameContext);
	const [commentInput, setCommentInput] = useState("");
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState("");
	const [postSuccess, setPostSuccess] = useState(false);

	function handleChange(event) {
		setError("");
		setCommentInput(event.target.value);
	}

	function handleClick(event) {
		event.preventDefault();
		setIsPosting(true);
		postCommentByUsername(articleId, username, commentInput)
			.then((response) => {
				setCommentInput("");
				setPostSuccess(true);
				setTimeout(() => setPostSuccess(false), 1500);
				setTimeout(() => setIsPosting(false), 1500);
				setCommentAdded(!commentAdded);
			})
			.catch((err) => {
				setIsPosting(false);
				setError(err.response.data.msg);
			});
	}

	return (
		<>
			<form id="comment-form">
				<label id="comment-label" htmlFor="comment-input">
					{postSuccess ? (
						<p id="post-success-box">
							<FontAwesomeIcon icon={faCheckCircle} />
							Your comment has been added!
						</p>
					) : (
						<textarea
							disabled={isPosting ? true : false}
							onChange={handleChange}
							placeholder="Add your comment here"
							id="comment-input"
						></textarea>
					)}
				</label>

				<button
					onClick={handleClick}
					disabled={isPosting ? true : false}
					id="publish-comment-button"
				>
					{isPosting ? "loading..." : "Publish"}
				</button>
				{error ? <p id="error-comment">{error}</p> : null}
			</form>
		</>
	);
}
export default CommentAdder;
