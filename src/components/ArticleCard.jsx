function Articlecard({ article }) {
	return (
		<>
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
				<li id="art-card-date">{article.created_at.slice(0, 10)}</li>
				<li id="art-card-votes">votes: {article.votes}</li>
			</section>
		</>
	);
}

export default Articlecard;
