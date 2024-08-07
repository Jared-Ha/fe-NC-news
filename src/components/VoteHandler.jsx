import { articleVoteChange } from "../api";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const VoteHandler = ({ articleId, singleArticle }) => {
	const [optimisticVotes, setOptimisticVotes] = useState(0);

	function handleUpVote() {
		setOptimisticVotes((currVotes) => {
			return currVotes + 1;
		});
		articleVoteChange(articleId, 1);
	}
	function handleDownVote() {
		setOptimisticVotes((currVotes) => {
			return currVotes + -1;
		});
		articleVoteChange(articleId, -1);
	}
	return (
		<div id="votes">
			<span>votes: {singleArticle.votes + optimisticVotes}</span>{" "}
			<FontAwesomeIcon
				className="thumb-vote"
				onClick={handleUpVote}
				icon={faThumbsUp}
			/>{" "}
			<FontAwesomeIcon
				className="thumb-vote"
				onClick={handleDownVote}
				icon={faThumbsDown}
			/>{" "}
		</div>
	);
};

export default VoteHandler;
