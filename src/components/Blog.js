import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { baseURL } from "./Basepath";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet";
function Blog() {
  const [users, setUsers] = useState([]);
  const [data, setdata] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [flag, setFlag] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    axios({
      url: baseURL + "blog/getAll",
      method: "get",
    })
      .then((res) => {
        setUsers(res.data.message);
        setdata(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newPage = (mediaType) => {
    setFlag(true);

    const EL = users.filter((el) => el.categories === mediaType);

    setFilterData(EL);
  };
  function getOne(id) {
    axios
      .get("https://trhblogsnew.herokuapp.com/blog/getOne/" + id)
      .then((response) => {
        setUsers(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const newPage1 = (id, title) => {
    const array = title.split("");
    for (let i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        array[i] = "-";
      }
    }
    Navigate("/" + array.join(""), { state: { userId: id } });

    getOne(id);
  };

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Get the latest updates of Technology | Business | Industry insights
        </title>
        <meta
          name="description"
          content="Blogs related to the latest updates on technology, information, business development, digital re-imagination, and assurance."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:1, max-video-preview:1"
        />
        <meta
          name="image"
          content="https://www.therapidhire.com/images/ser6.png"
        />
        <meta
          itemprop="name"
          content="Get the latest updates of Technology | Business | Industry insights"
        />
        <meta
          itemprop="description"
          content="Blogs related to the latest updates on technology, information, business development, digital re-imagination, and assurance."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="blockchain, IoT,Internet of things, java, cloud computing, technology, business, software development, mobile application, android, ios, business, marketing, digital marketing, industry insights, cryptocurrency, bitcoin , NFT, fintech , AI, ML, DL, deep learning, python, programming"
        />
        <meta
          itemprop="image"
          content="https://www.therapidhire.com/images/ser6.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Get the latest updates of Technology | Business | Industry insights"
        />
        <meta
          name="twitter:description"
          content="Blogs related to the latest updates on technology, information, business development, digital re-imagination, and assurance."
        />
        <meta name="twitter:site" content="@therapidhire_" />
        <meta name="twitter:creator" content="@therapidhire_" />
        <meta
          name="twitter:image:src"
          content="https://www.therapidhire.com/images/ser6.png"
        />
        <meta
          name="og:title"
          content="Get the latest updates of Technology | Business | Industry insights"
        />
        <meta
          name="og:description"
          content="Blogs related to the latest updates on technology, information, business development, digital re-imagination, and assurance."
        />
        <meta
          name="og:image"
          content="https://www.therapidhire.com/images/logo.png"
        />
        <meta name="og:url" content="https://www.therapidhire.com/blog" />
        <meta name="og:site_name" content="therapidhire" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:app_id" content="1369882117133030" />
        <meta name="og:type" content="article" />
        <meta name="article:section" content="technology" />
        <meta
          name="article:author"
          content="https://www.facebook.com/profile.php?id=100054281690679"
        />
        <meta name="article:tag" content="software development" />

        <link rel="canonical" href="https://www.therapidhire.com/blog" />

        <link
          rel="alternate"
          href="https://www.therapidhire.com/blog"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/blog/en"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/blog/fr"
          hreflang="fr"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/blog/es"
          hreflang="es"
        />
        <link
          rel="alternate"
          href="https://www.therapidhire.com/blog/mx"
          hreflang="es-mx"
        />
      </Helmet>
      <div className="offwrap"></div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">Creative Ideas - Blogs</h1>
              <h2>
                {" "}
                <span className="sub-text">
                  Most creative ideas in blog post of Cloud services , Designing
                  , Development.{" "}
                </span>
              </h2>
            </div>
          </div>
        </div>
        {users ? (
          <div className="blog-area pt-95 pb-95">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="row justify-content-center">
                    {flag === false
                      ? users &&
                        users.map((item) => (
                          <div className="col-lg-6 col-md-6">
                            <div className="single-blog-card">
                              <div className="blog-image">
                                <img src={item.bannerImage} alt="image" />

                                {item.date && (
                                  <div className="date">{item.date}</div>
                                )}
                              </div>
                              <div className="blog-content">
                                <h3>{item.title}</h3>
                                <p>{item.mainDesc.slice(0, 124)}</p>
                                <button
                                  onClick={() => newPage1(item._id, item.title)}
                                  className="blogbtn"
                                >
                                  View more...
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      : filterData &&
                        filterData.map((item) => (
                          <div className="col-lg-6 col-md-6">
                            <div className="single-blog-card">
                              <div className="blog-image">
                                <img src={item.bannerImage} alt="image" />

                                <div className="date">{item.date}</div>
                              </div>

                              <div className="blog-content">
                                <h3>
                                  <a href="#">{item.title}</a>
                                </h3>
                                <p>{item.mainDesc.slice(0, 124)}</p>
                                <button
                                  className="blogbtn"
                                  onClick={() => newPage1(item._id, item.title)}
                                >
                                  View more...
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <aside className="widget-area">
                    <div className="widget widget_recent_post">
                      <h3 className="widget-title">Recent Post</h3>

                      {data
                        ? data.slice(0, 3).map((val) => (
                            <article className="item">
                              <a
                                className="thumb"
                                onClick={() => newPage1(val._id, val.title)}
                              >
                                <img src={val.bannerImage} alt="image" />
                              </a>
                              <div className="info">
                                <span
                                  onClick={() => newPage1(val._id, val.title)}
                                >
                                  {val.date}
                                </span>
                                <h4
                                  className="title usmall"
                                  onClick={() => newPage1(val._id, val.title)}
                                >
                                  <a
                                    onClick={() => newPage1(val._id, val.title)}
                                  >
                                    {val.title}
                                  </a>
                                </h4>
                              </div>
                            </article>
                          ))
                        : ""}
                    </div>

                    <div className="widget widget_categories">
                      <h3 className="widget-title">Categories</h3>

                      <ul className="list">
                        <div>
                          {users
                            .map((dataItem) => dataItem.categories)
                            .filter(
                              (mediaType, index, array) =>
                                array.indexOf(mediaType) === index
                            )
                            .map((mediaType) => (
                              <li onClick={() => newPage(mediaType)}>
                                <a className=" d-flex justify-content-between align-items-center">
                                  {mediaType}
                                  <span>
                                    ({" "}
                                    {
                                      users.filter(
                                        (item) => item.categories === mediaType
                                      ).length
                                    }
                                    )
                                  </span>
                                </a>
                              </li>
                            ))}
                        </div>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "Data not found"
        )}
      </div>
      <div id="scrollUp" className="blue-color">
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  );
}
<ScrollToTop />;
export default Blog;
