import { Link } from "react-router-dom";

function TopicCard({ topic }) {
	return (
		<Link to={`/topics/${topic.slug}`} id="topic-link-box">
			<img src={topic.topic_img_url} className="topic-image"></img>
			<div className="topic-text">
				<h3>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h3>
				<p>{topic.description}</p>
			</div>
		</Link>
	);
}

export default TopicCard;
