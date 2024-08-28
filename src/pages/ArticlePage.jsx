import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://2bgx007g-1337.euw.devtunnels.ms/api/articles/${id}?populate=*`)
        .then((res) => {
          setArticle(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetch", error);
          setError("Error fetc");
          setLoading(false);
        });
    } else {
      setError("No id");
      setLoading(false);
    }
  }, [id]);

  if (!article) return <p>No article data available</p>;

  const { attributes } = article;
  
  const renderContent = (contentArray) => {
    return contentArray.map((block) => {
      if (block.type === "paragraph") {
        return block.children.map((child, i) => <p key={i}>{child.text}</p>);
      }
      return null;
    });
  };

  const articleDescr_img = article.attributes.articleDescr_img?.data?.[0]?.attributes?.url;
  const articleView_img1 = article.attributes.articleView_img1?.data?.[0]?.attributes?.url;
  const articleView_img2 = article.attributes.articleView_img2?.data?.[0]?.attributes?.url;

  return (
    <>
      <div className="wrapper">
        <section className="article-hero">
          <h2 className="article-hero__title">{attributes.title}</h2>
          <p className="article-hero__descr">{renderContent(article.attributes.content)}</p>
        </section>
        <div className="container">
          <div className="article__buttons">
            <button className="article__buttons-item">Projects</button>
            <button className="article__buttons-item">Architectural projects</button>
            <button className="article__buttons-item">Sustainable Design</button>
          </div>
          <section className="article-descr">
            <img
              src={`https://2bgx007g-1337.euw.devtunnels.ms${articleDescr_img}`}
              width="1040"
              alt="img"
              className="article-descr__img"
            />
            <div className="article-descr__text">
              <h2 className="article-descr__title">Project Description</h2>
              <p className="p1">{renderContent(attributes.articleDescr_text)}</p>
            </div>
          </section>
          <section className="article-view">
            <div className="article-view__left">
              <img
                className="article-view__img"
                width="650"
                src={`https://2bgx007g-1337.euw.devtunnels.ms${articleView_img1}`}
                alt="img"
              />
              <p className="article-view__text">{renderContent(attributes.articleView_text1)}</p>
            </div>
            <div className="article-view__right">
              <img
                className="article-view__img--right"
                width="1040"
                src={`https://2bgx007g-1337.euw.devtunnels.ms${articleView_img2}`}
                alt="img"
              />
              <p className="article-view__text--right">{renderContent(attributes.articleView_text2)}</p>
            </div>
          </section>
          <section className="article-layout">
            <div className="article-layout__text">
              <h2 className="article-layout__title">Layout features</h2>
              <p className="article-layout__descr">{renderContent(attributes.architectureLayuout__text)}</p>
            </div>
          </section>
          <section className="article-recommendace">
            <h2 className="article-recommendace__title">We also recommend</h2>
            <div className="article-recommendace__catalog">
              <ul className="catalog__list">
                <li className="catalog__item">
                  <a className="product">
                    <img className="product__img" src="../../../public/img/Rectangle2.png" alt="img" width="580" />
                    <h2 className="product__title">Integrating Smart Technology in Modern Architectural Design</h2>
                    <div className="product__descr">
                      The integration of smart technology in architectural design is revolutionizing the way buildings
                      of Things ,artificial intelligence, and advanced sensors to enhance functionality, efficiency, and
                      user experience.
                    </div>
                  </a>
                </li>
                <li className="catalog__item">
                  <a className="product">
                    <img className="product__img" src="../../../public/img/Rectangle3.png" alt="img" width="580" />
                    <h2 className="product__title">Integrating Smart Technology in Modern Architectural Design</h2>
                    <div className="product__descr">
                      The integration of smart technology in architectural design is revolutionizing the way buildings
                      are constructed and operated. Smart buildings utilize advanced technologies such as the Internet
                      of Things ,artificial intelligence, and advanced sensors to enhance functionality, efficiency, and
                      user experience.
                    </div>
                  </a>
                </li>
                <li className="catalog__item">
                  <a className="product">
                    <img className="product__img" src="../../../public/img/Rectangle4.png" alt="img" width="580" />
                    <h2 className="product__title">Integrating Smart Technology in Modern Architectural Design</h2>
                    <div className="product__descr">
                      The integration of smart technology in architectural design is revolutionizing the way buildings
                      are constructed and operated. Smart buildings utilize advanced technologies such as the Internet
                      of Things ,artificial intelligence, and advanced sensors to enhance functionality, efficiency, and
                      user experience.
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
