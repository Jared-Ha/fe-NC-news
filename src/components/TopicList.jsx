import TopicCard from "./TopicCard";

function TopicList({ topics }) {
	return (
		<>
			<h2>Topics</h2>
			<ul id="topic-ul">
				{topics.map((topic) => {
					return <TopicCard key={topic.slug} topic={topic} />;
				})}
			</ul>
		</>
	);
}

export default TopicList;
