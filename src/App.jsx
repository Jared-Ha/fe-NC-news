import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";
import UserList from "./components/UserList";
import SingleArticle from "./components/SingleArticle";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [topics, setTopics] = useState([]);
	const [singleTopic, setSingleTopic] = useState("");

	return (
		<>
			<Header />
			<Search setSearchTerm={setSearchTerm} />
			<Routes>
				<Route
					path="/"
					element={
						<ArticleList
							searchTerm={searchTerm}
							topics={topics}
							singleTopic={singleTopic}
							setSingleTopic={setSingleTopic}
						/>
					}
				></Route>{" "}
				<Route
					path="/topics"
					element={
						<TopicList
							topics={topics}
							setTopics={setTopics}
							setSingleTopic={setSingleTopic}
						/>
					}
				></Route>{" "}
				<Route path="/users" element={<UserList />}></Route>
				<Route path="/articles/:article_id" element={<SingleArticle />}></Route>
			</Routes>
		</>
	);
}

export default App;
