import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const API_KEY = "PmePpLjkotY0aTLk5O9BDvWaa99w3ZqA";

  const handleChange = (event) => {
    setQuery(event.target.value);
    setShowAlert(false); // Menyembunyikan alert saat pengguna mulai mengetik
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query.trim()) {
      setShowAlert(true); // Menampilkan alert jika query kosong
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
      );
      setArticles(response.data.response.docs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`
        );
        setArticles(response.data.response.docs);
      } catch (error) {
        console.error("Error fetching initial articles:", error);
      }
    };

    fetchInitialArticles();
  }, []); 

  return (
    <div>
      {showAlert && <p className="text-red-500 mb-2">Please enter a search keyword.</p>}
      <form onSubmit={handleSubmit} className="flex items-center mb-6">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search articles..."
          className="w-full border p-2"
        />
        <button
          type="submit"
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-3 justify-between gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
