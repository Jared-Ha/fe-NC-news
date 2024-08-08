import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments } from "@fortawesome/free-solid-svg-icons";

function Articlecard({ article }) {
	return (
		<li>
			<section className="article-card">
				<a id="image-link" href={`/articles/${article.article_id}`}>
					<img className="article-card-img" src={article.article_img_url}></img>{" "}
				</a>
				<a id="title-link" href={`/articles/${article.article_id}`}>
					<li id="art-card-title">{article.title}</li>
				</a>
				<li id="art-card-author">By {article.author}</li>
				<li id="art-card-topic">
					#{article.topic[0].toUpperCase() + article.topic.slice(1)}
				</li>
				<li id="art-card-date">
					{new Date(article.created_at).toLocaleDateString()}
				</li>
				<li id="art-card-votes">
					{" "}
					<FontAwesomeIcon icon={faThumbsUp} />: {article.votes}
				</li>
				<li id="art-card-comment-count">
					{" "}
					<FontAwesomeIcon icon={faComments} />: {article.comment_count}
				</li>
			</section>
		</li>
	);
}

export default Articlecard;
