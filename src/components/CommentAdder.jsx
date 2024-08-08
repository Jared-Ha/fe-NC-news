import { useContext, useState } from "react";
import { UsernameContext } from "../contexts/Username";
import { postCommentByUsername } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function CommentAdder({ articleId, setCommentAdded, commentAdded }) {
	const { username } = useContext(UsernameContext);
	const [commentInput, setCommentInput] = useState("");
	const [isPosting, setIsPosting] = useState(false);
	const [error, setError] = useState("");
	const [postSuccess, setPostSuccess] = useState(false);
	const [commentCharsCount, setCommentCharsCount] = useState(0);

	const maxCharError = "Comment exceeds the maximum 500 characters allowed";
	function handleChange(event) {
		commentInput.length < 500 ? setError("") : setError(maxCharError);

		setCommentInput(event.target.value);
		setCommentCharsCount(commentInput.length);
	}

	function handleClick(event) {
		event.preventDefault();
		setIsPosting(true);
		if (commentInput.length > 500) {
			setError(maxCharError);
			setIsPosting(false);
		} else {
			postCommentByUsername(articleId, username, commentInput)
				.then((response) => {
					setCommentInput("");
					setPostSuccess(true);
					setTimeout(() => setPostSuccess(false), 1500);
					setTimeout(() => setIsPosting(false), 1500);
					setCommentAdded(!commentAdded);
				})
				.catch((err) => {
					console.log(err);
					setIsPosting(false);
					setError(err.response.data.msg);
				});
		}
	}

	return (
		<>
			<h5 id="comment-adder-username">{username}</h5>
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
				<p id="characters-remaining">{commentCharsCount}/500</p>

				<button
					onClick={handleClick}
					disabled={isPosting ? true : false}
					id="publish-comment-button"
				>
					{isPosting ? (
						"loading..."
					) : (
						<>
							Add comment <FontAwesomeIcon icon={faPaperPlane} />
						</>
					)}
				</button>
				{error ? <p id="error-comment">{error}</p> : null}
			</form>
		</>
	);
}
export default CommentAdder;
