import React, { useState } from "react";
import axios from "axios";

const ArticleSearch = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const API_KEY = "PmePpLjkotY0aTLk5O9BDvWaa99w3ZqA";

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
      );
      setArticles(response.data.response.docs);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search articles..."
          className="w-full border p-2"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <a
              href={article.web_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-xl font-bold">{article.headline.main}</h2>
            </a>
            <p className="text-gray-600">{article.byline.original}</p>
            <p className="text-gray-600">{article.pub_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleSearch;
