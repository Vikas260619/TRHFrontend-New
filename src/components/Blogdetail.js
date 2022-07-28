import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { baseURL } from "./Basepath";

function Blogdetail() {
  const { id } = useParams();
  const [users, setUsers] = useState("");
  const [data, setdata] = useState([]);
  const [categorie, setCategorie] = useState([]);



  useEffect(() => {
    axios({
      url: baseURL+"blog/getOne/" + id,
      method: 'get',
    })
      .then(res => {
        setUsers(res.data.message)
      }).catch(err => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    axios({
      url: baseURL+"blog/recentBlog",
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
      url:  baseURL+"blog/categoriesCount",
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
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Creative ideas - blogs
                <span className="watermark">Blog</span>
              </h1>
              <span className="sub-text">
                Most creative ideas in blog post of Cloud services , Designing ,
                Development..{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="blog-details-area pt-95 pb-95">
          <div className="container">
            {users ?
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="blog-details-desc">

                    <div className="article-image">
                      <img src={users.bannerImage} alt="image" />
                    </div>

                    <div className="article-content">
                      <ul className="entry-list">
                        <li>
                          By <a href="/">{users.author}</a>
                        </li>
                        <li>{users.date}</li>
                      </ul>
                      <h3>{users.title}</h3>
                      <p>
                        {users.mainDesc}
                      </p>
                      {users.content ? users.content?.map((val) => (
                        <div>
                          <ul className="list">
                            <li>
                              <h4>{val.title}</h4>
                            </li>
                            {val.description?.map((items) => (
                              <>
                                {val.description?.length === 1 ?
                                  <li>
                                    {items}
                                  </li>
                                  :
                                  <li>
                                    <i className="fa fa-check-circle"></i> {items}
                                  </li>
                                }
                              </>
                            ))}
                          </ul>
                        </div>
                      )) : ""}
                      {
                        users.quotes?.map((i) => (
                          <div className="article-quote">
                            <i className="fa fa-quote-left"></i>
                            <p>
                              {i}
                            </p>
                          </div>
                        ))
                      }
                    </div>

                    <div className="article-share">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                          <div className="share-content">
                            <h4>Share The Article:</h4>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="share-social text-end">
                            <li>
                              <a href="/" target="_blank">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/" target="_blank">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/" target="_blank">
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/" target="_blank">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/" target="_blank">
                                <i className="fa fa-quora"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="article-comments">
                      <h3>03 Comments:</h3>

                      <div className="comments-list">
                        <img src="images/image-1.jpg" alt="author" />
                        <h5>
                          Vikas Choudhary, <span>2 months ago</span>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                          sed diam nonumy eirmod tempor invidunt ut labore et
                          dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                        <a href="/" className="reply-btn">
                          Reply
                        </a>
                      </div>
                      <div className="comments-list children">
                        <img src="images/image-3.jpg" alt="commenticon" />
                        <h5>
                          Krishna, <span>2 months ago</span>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                          sed diam nonumy eirmod tempor invidunt ut labore et
                          dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                        <a href="/" className="reply-btn">
                          Reply
                        </a>
                      </div>
                      <div className="comments-list">
                        <img src="images/image-1.jpg" alt="commenticon1" />
                        <h5>
                          Vikas Choudhary, <span>2 months ago</span>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                          sed diam nonumy eirmod tempor invidunt ut labore et
                          dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                        <a href="/" className="reply-btn">
                          Reply
                        </a>
                      </div>
                    </div>

                    <div className="article-leave-comment">
                      <h3>Leave a reply</h3>

                      <form>
                        <div className="row justify-content-center">
                          <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email address"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Website"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                placeholder="Your message"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <button type="submit" className="enquirebtn">
                              Post A Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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
                    <br />
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
                              href="/"
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
              : "Data Not Found"}
          </div>
        </div>

      </div>


      <div id="scrollUp" className="blue-color">
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  );
}

export default Blogdetail;
