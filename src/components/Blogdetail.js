import React, { useEffect, useState } from "react";
import axios from "axios";
import { omit } from "lodash";
import { useParams } from "react-router-dom";
import { baseURL } from "./Basepath";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import TimeAgo from "timeago-react";
import ScrollToTop from "react-scroll-to-top";


function Blogdetail() {
  const { id } = useParams();
  const [users, setUsers] = useState("");
  const [data, setdata] = useState([]);
  const [comments, setComments] = useState([true]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(true);
  const [commentFlag, setCommentFlag] = useState(0);
  const [allComment, setAllComment] = useState(0);
  const [values, setValues] = useState({});

  const [errors, setErrors] = useState({});

  const Navigate = useNavigate();
  let blog_id = id;
  var comment_status = "pending";

  const validate = (event, name, value) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    validate(event, name, val);
    setEmail(val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(fullname !== ""){
      if(email !== ""){
        if(comment !== ""){
    let data = {
      fullname,
      email,
      comment,
      comment_status,
      blog_id,
    };
    axios({
      url: baseURL + "comment/create",
      method: "post",
      data: data,
    })
      .then((res) => {
        toast("Comment Submited Sucessfully");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch((err) => console.log(err));
    } else {
      toast("Please Fill the massage field ");
      }
    } else {
      toast("Please Fill the email field ");
      }
    } else {
      toast("Please Fill the name field ");
      }
  };

  useEffect(() => {
    axios({
      url: baseURL + "blog/getOne/" + id,
      method: "get",
    })
      .then((res) => {
        setUsers(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios({
      url: baseURL + "blog/getall",
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
      url: baseURL + "comment/getblogcomment/" + id,
      method: "get",
    })
      .then((result) => {
        setComments(result.data.message.reverse());
        if (result.data.message.length > 0) {
          setCommentFlag(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Commenthandle = (e) => {
    allComment === 0 ? setAllComment(1) : setAllComment(0);
    setShow(!show);
  };

  const newPage = (id) => {
    Navigate("/blogdetail/" + id);
  };

  return (
    <div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Creative Ideas - Blogs
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
            {users ? (
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="blog-details-desc">
                    <div className="article-image">
                      <img src={users.bannerImage} alt="" />
                    </div>

                    <div className="article-content">
                      <ul className="entry-list">
                        <li>
                          By <a href="/">{users.author}</a>
                        </li>
                        <li>{users.date}</li>
                      </ul>
                      <h3>{users.title}</h3>
                      <p>{users.mainDesc}</p>
                      {users.content &&
                        users.content?.map((val) => (
                          <div>
                            <ul className="list">
                              <li>
                                <h4>{val.title}</h4>
                              </li>
                              {val.description?.map((items) => (
                                <>
                                  {val.description?.length === 1 ? (
                                    <li>{items}</li>
                                  ) : (
                                    <li>
                                      <i className="fa fa-check-circle"></i>{" "}
                                      {items}
                                    </li>
                                  )}
                                </>
                              ))}
                              <div className="article-image">
                                <img src={val.contentImages} alt="" />
                              </div>
                            </ul>
                          </div>
                        ))}
                        
                      {users.quotes&&users.quotes?.map((i) =>(
                        i=== "" ? console.log(null):
                         <div className="article-quote">
                        <i className="fa fa-quote-left"></i>
                        <p>{i}</p>
       
                      </div>
                      
                          
                      
                      ))}
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
                              <a href="" target="_blank">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                <i className="fa fa-quora"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {commentFlag === 1 ? (
                      <>
                        {allComment === 0 ? (
                          <>
                            <div className="article-comments">{
                              comments && 
                              <h3> {comments.length} Comments:</h3>
                            }
                              
                              <div className="comments-list">
                                {comments
                                  ? comments.slice(0, 3).map((comt, index) => (
                                      <>
                                        <h5>
                                          {comt.fullname.replace(/\b\w/g, (l) =>
                                            l.toUpperCase()
                                          )}{" "}
                                          <span>
                                            <TimeAgo
                                              datetime={comt.createdAt}
                                            />
                                          </span>
                                        </h5>
                                        <p> {comt.comment} </p>
                                        <a
                                          href="javaScript:void(0)"
                                          className="reply-btn"
                                        >
                                          Reply
                                        </a>
                                      </>
                                    ))
                                  : ""}
                                {comments.length > 3 ? (
                                  <div className="blogcomment">
                                    <button onClick={Commenthandle}>
                                      {show ? "View more..." : "Show Less"}
                                    </button>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="article-comments">
                              <h3> {comments.length} Comments:</h3>
                              <div className="comments-list">
                                {comments
                                  ? comments.map((comt, index) => (
                                      <>
                                        <h5>
                                          {comt.fullname.replace(/\b\w/g, (l) =>
                                            l.toUpperCase()
                                          )}{" "}
                                          <span>
                                            <TimeAgo
                                              datetime={comt.createdAt}
                                            />
                                          </span>
                                        </h5>
                                        <p> {comt.comment} </p>
                                        <a
                                          href="javaScript:void(0)"
                                          className="reply-btn"
                                        >
                                          Reply
                                        </a>
                                      </>
                                    ))
                                  : ""}
                                <div className="blogcomment">
                                  <button onClick={Commenthandle}>
                                    {show ? "View more..." : "Show Less"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="article-comments">
                          <h3> No Comments:</h3>
                        </div>
                      </>
                    )}

                    <div className="article-leave-comment">
                      <h3>Leave a reply</h3>

                      <form>
                        <div className="row justify-content-center">
                          <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                className="form-control"
                                placeholder="Enter name"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                id="email"
                              name="email"
                                value={email}
                               // onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Email address"
                                style={{
                                  borderBottomColor: errors.email ? "red" : "",
                                }}
                                onChange={handleChange}
                              />
                               {errors.email && (
                              <p
                                style={{
                                  color: errors.email ? "red" : "",
                                  marginTop: "-4vh",
                                }}
                              >
                                {errors.email}
                              </p>
                            )}
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Your message"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <button
                              type="submit"
                              className="enquirebtn "
                              onClick={handleSubmit}
                            >
                              Post A Comment
                            </button>
                            <ToastContainer />
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
                      {data &&
                        data.slice(0, 3).map((val) => (
                          <article className="item">
                            <a href="" className="thumb">
                              <img src={val.bannerImage} alt="image" />
                            </a>
                            <div className="info">
                              <span>{val.date}</span>
                              <h4
                                className="title usmall"
                                onClick={() => newPage(val._id)}
                              >
                                <a href="">{val.title}</a>
                              </h4>
                            </div>
                          </article>
                        ))}
                    </div>
                    <br />
                  </aside>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
<ScrollToTop/>

export default Blogdetail;
