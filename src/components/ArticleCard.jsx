import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Articlecard({ article }) {
	return (
		<li>
			<section className="article-card">
				<Link id="image-link" to={`/articles/${article.article_id}`}>
					<img
						className="article-card-img"
						src={article.article_img_url}
						alt={article.title}
					/>
				</Link>
				<Link id="title-link" to={`/articles/${article.article_id}`}>
					<li id="art-card-title">{article.title}</li>
				</Link>
				<li id="art-card-author">By {article.author}</li>
				<li id="art-card-topic">
					#{article.topic[0].toUpperCase() + article.topic.slice(1)}
				</li>
				<li id="art-card-date">
					{new Date(article.created_at).toLocaleDateString()}
				</li>
				<li id="art-card-votes">
					<FontAwesomeIcon icon={faThumbsUp} />: {article.votes}
				</li>
				<li id="art-card-comment-count">
					<FontAwesomeIcon icon={faComments} />: {article.comment_count}
				</li>
			</section>
		</li>
	);
}

export default Articlecard;
