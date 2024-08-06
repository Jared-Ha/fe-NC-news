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

export const getArticleById = (article_id) => {
	return newsApi.get(`/articles/${article_id}`).then((response) => {
		return response.data.article;
	});
};

export const getCommentsByArticleId = (article_id) => {
	return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
		return response.data.comments;
	});
};
