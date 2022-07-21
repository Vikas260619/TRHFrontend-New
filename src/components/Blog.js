import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { baseURL } from "./Basepath";

function Blog() {
  const [users, setUsers] = useState([]);
  const [data, setdata] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios({
      url: baseURL+"blog/getall",
            method: "get",
    })
      .then((res) => {
        setUsers(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newPage = (id) => {
    Navigate("/blogdetail/" + id);
  };
  useEffect(() => {
    axios({
      url: baseURL+ "blog/recentBlog",
      method: "get",
    })
      .then((result) => {
        setdata(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios({
      url: baseURL+"blog/categoriesCount",
      method: "get",
    })
      .then((res) => {
        setCategorie(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="offwrap"></div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                TRH Blog
                <span className="watermark">Blog</span>
              </h1>
              <span className="sub-text">
              Get the latest industry insights and expert tips to stay ahead!!
              </span>
            </div>
          </div>
        </div>

        <div className="blog-area pt-95 pb-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row justify-content-center">
                  {users
                    ? users.map((item) => (
                        <div className="col-lg-6 col-md-6">
                          <div className="single-blog-card">
                            <div className="blog-image">
                              <a href="//">
                                <img src={item.bannerImage} alt="blog" />
                              </a>
                              <div className="date">{item.date}</div>
                            </div>
                            <div className="blog-content">
                              <h3>
                                <a href="/">{item.title}</a>
                              </h3>
                              <p>{item.mainDesc.slice(0, 124)}</p>
                              <button onClick={() => newPage(item._id)} className="blog-btn">
                                View more...
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <aside className="widget-area">
                  <div className="widget widget_recent_post">
                    <h3 className="widget-title">Recent Post</h3>

                    {data
                      ? data.slice(0, 3).map((val) => (
                          <article className="item">
                            <a href="/" className="thumb">
                              <img src={val.bannerImage} alt="image" />
                            </a>
                            <div className="info">
                              <span>{val.date}</span>
                              <h4 className="title usmall">
                                <a href="/">{val.title}</a>
                              </h4>
                            </div>
                          </article>
                        ))
                      : ""}
                  </div>

                  <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul className="list">
                      {categorie &&
                        categorie.map((val) => (
                          <li>
                            <a
                              href="/"
                              className=" d-flex justify-content-between align-items-center"
                            >
                              {val._id}<span>{val.count}</span>
                            </a>
                          </li>
                        ))}
                      {/* {categorie &&
                        categorie.map((val) => (
                          <li>
                            <a
                              href="#"
                              className=" d-flex justify-content-between align-items-center"
                            >
                              {val} <span>{console.log(categorie)}</span>
                            </a>
                          </li>
                        ))} */}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="scrollUp" className="blue-color">
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  );
}
export default Blog;
