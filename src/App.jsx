import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import ArticleProvider from "./components/ArticleProvider";
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
					element={<ArticleProvider searchTerm={searchTerm} />}
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
								<ArticleProvider searchTerm={searchTerm} topic={topic.slug} />
							}
						></Route>
					);
				})}
				<Route
					path="*"
					element={
						<div>
							<h3 className="page-error">404 - Page not found</h3>
						</div>
					}
				></Route>
				<Route
					path="/topics/*"
					element={
						<div>
							<h3 className="page-error">404 - Topic not found</h3>
						</div>
					}
				></Route>
			</Routes>
		</>
	);
}

export default App;
