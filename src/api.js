import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://be-nc-news-ywak.onrender.com/api/",
});

export const getArticles = (searchTerm) => {
	return newsApi
		.get("/articles", { params: { searchTerm } })
		.then((response) => {
			return response.data.articles;
		});
};
