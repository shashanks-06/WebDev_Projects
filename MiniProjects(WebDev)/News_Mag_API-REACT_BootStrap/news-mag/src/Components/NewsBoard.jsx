import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category, country]);

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )",
      }}
    >
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            author={news.author}
            description={news.description}
            url={news.url}
            src={news.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
