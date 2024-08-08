import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";
import UserList from "./components/UserList";
import { useEffect } from "react";
import SingleArticle from "./components/SingleArticle";
import { getTopics } from "./api";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	return (
		<>
			<Header />
			<Search setSearchTerm={setSearchTerm} />
			<Routes>
				<Route
					path="/"
					element={<ArticleList searchTerm={searchTerm} />}
				></Route>{" "}
				<Route path="/topics" element={<TopicList topics={topics} />}></Route>{" "}
				<Route path="/users" element={<UserList />}></Route>
				<Route path="/articles/:article_id" element={<SingleArticle />}></Route>
				{topics.map((topic) => {
					return (
						<Route
							key={topic.slug}
							path={`/topics/${topic.slug}`}
							element={
								<ArticleList searchTerm={searchTerm} topic={topic.slug} />
							}
						></Route>
					);
				})}
			</Routes>
		</>
	);
}

export default App;
