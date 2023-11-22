import axios from "axios";

// const apiKey = "7a9356bd8c9347ccbcc0963454703f64"; old Api

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  apiKey: process.env.REACT_APP_API_KEY,
};

export async function fetchNews(url = "", config = {}) {
  const response = await axios.get(url, config);
  return response.data.articles;
}

export function fetchTopNews(country, filter, category) {
  return fetchNews(
    `top-headlines?country=${country}&page=1&q=${filter}&category=${category}&pageSize=100`
  );
}
