import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter";

const Catalog = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://2bgx007g-1337.euw.devtunnels.ms/api/articles?populate=*")
      .then((res) => {
        setArticles(res.data.data);
        setFilteredArticles(res.data.data); 
      })
      .catch((error) => {
        console.error("Error Fetch:", error);
      });
  }, []);

  const renderContent = (contentArray) => {
    return contentArray.map((block) => {
      if (block.type === "paragraph") {
        return block.children.map((child, i) => <p key={i}>{child.text}</p>);
      }
      return null;
    });
  };

  return (
    <section className="catalog">
      <Filter originalItems={articles} setItems={setFilteredArticles} />
      <div className="container">
        <ul className="catalog__list">
          {filteredArticles.map((article) => {
            const imageUrl = article.attributes.image?.data?.[0]?.attributes?.url;
            return (
              <li className="catalog__item" key={article.id}>
                <Link className="product" to={`/article/${article.id}`}>
                  {imageUrl ? (
                    <img
                      className="product__img"
                      src={`https://2bgx007g-1337.euw.devtunnels.ms${imageUrl}`}
                      alt="img"
                      width="580"
                    />
                  ) : (
                    <p>No image</p>
                  )}
                  <h2 className="product__title">{article.attributes.title}</h2>
                  <div className="product__descr">{renderContent(article.attributes.content)}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;