function Articlecard({ article }) {
	return (
		<>
			<section className="article-card">
				<img className="article-card-img" src={article.article_img_url}></img>
				<li id="art-card-title">{article.title}</li>
				<li id="art-card-author">By {article.author}</li>
				<li id="art-card-topic">
					{article.topic[0].toUpperCase() + article.topic.slice(1)}
				</li>
				<li id="art-card-date">{article.created_at.slice(0, 10)}</li>
				<li id="art-card-votes">votes: {article.votes}</li>
				<button id="full-article-btn">Read full article...</button>
			</section>
		</>
	);
}

export default Articlecard;
