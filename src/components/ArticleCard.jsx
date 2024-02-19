import React from "react";

const ArticleCard = ({ article }) => {
  const { headline, byline, pub_date, web_url } = article;

  const handleClick = () => {
    window.open(web_url, "_blank");
  };

  return (
    <div className="border p-4 bg-gray-600 rounded-lg">
      <h2 className="text-lg font-semibold mb-2 ">{headline.main}</h2>
      <p className="text-base mb-1">{byline.original}</p>
      <p className="text-xs">{new Date(pub_date).toLocaleDateString()}</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-2"
      >
        Read More
      </button>
    </div>
  );
};

export default ArticleCard;
