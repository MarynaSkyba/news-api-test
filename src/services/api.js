import axios from "axios";

// const apiKey = process.env.REACT_APP_API_KEY;
// const apiKey = "7a9356bd8c9347ccbcc0963454703f64";
// const apiUrl = "https://newsapi.org/v2/top-headlines";

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  apiKey: "7a9356bd8c9347ccbcc0963454703f64",
};

// export async function fetchTopNews(country = "us", page = 1, filter = "") {
//   const response = await axios.get(
//     `${apiUrl}?country=${country}&apiKey=${apiKey}&page=${page}&q=${filter}`
//   );
//   console.log("response", response.data.articles);
//   return response.data.articles;
// }

export async function fetchNews(url = "", config = {}) {
  const response = await axios.get(url, config);
  console.log("responce", response);
  return response.data.articles;
}

export function fetchTopNews(country, page, filter, category) {
  return fetchNews(
    `top-headlines?country=${country}&page=${page}&q=${filter}&category=${category}`
  );
}

export function fetchSearchNews(filter) {
  return fetchNews(`everything?q=${filter}`);
}

export function fetchCategory(country, page, category) {
  return fetchNews(
    `top-headlines?country=${country}&page=${page}&category=${category}`
  );
}
