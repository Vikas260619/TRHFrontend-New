import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { baseURL } from "./Basepath";

function Blog() {
  const [users, setUsers] = useState([]);
  const [data, setdata] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [flag, setFlag] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    
    axios({
      url: baseURL + "blog/getall",
      method: "get",
    })
      .then((res) => {
        setUsers(res.data.message);
        setdata(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newPage = (mediaType) => {
    setFlag(true);
    console.log(mediaType);

    const EL = users.filter((el) => el.categories === mediaType);
    console.log(EL);

    setFilterData(EL);
  };

  const newPage1 = (id) => {
    Navigate("/blogdetail/" + id);
  };

  console.log();

  return (
    <div>
      <div className="offwrap"></div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container">
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
                              <a href="//">
                                <img src={item.bannerImage} alt="image" />
                              </a>
                              <div className="date">{item.date}</div>
                            </div>
                            <div className="blog-content">
                              <h3>
                                <a href="#">{item.title}</a>
                              </h3>
                              <p>{item.mainDesc.slice(0, 124)}</p>
                              <button onClick={() => newPage1(item._id)}>
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
                              <a href="//">
                                <img src={item.bannerImage} alt="image" />
                              </a>
                              <div className="date">{item.date}</div>
                            </div>
                            <div className="blog-content">
                              <h3>
                                <a href="#">{item.title}</a>
                              </h3>
                              <p>{item.mainDesc.slice(0, 124)}</p>
                              <button
                                onClick={() => newPage1(item._id)}
                                className=""
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
                            <a href="#" className="thumb">
                              <img src={val.bannerImage} alt="image" />
                            </a>
                            <div className="info">
                              <span>{val.date}</span>
                              <h4
                                className="title usmall"
                                onClick={() => newPage1(val._id)}
                              >
                                <a href="#">{val.title}</a>
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
                          .map((dataItem) => dataItem.categories) // get all media types
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
      </div>

      <div id="scrollUp" className="blue-color">
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  );
}
export default Blog;
