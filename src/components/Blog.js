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
    console.log(baseURL);
    axios({
      url: baseURL + "blog/getall",
      //  url: "http://localhost:8080/blog/getall",

      method: "get",
    })
      .then((res) => {
        setUsers(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newPage = (id) => {
    Navigate("/blogdetail/" + id);
  };

 const  new1 =(md) =>{
console.log(md)
users.map((item,err)=>{
 if(item.categories === md){
 console.log(item._id) 
 }else{
console.log(err);
 }
 })
}
 
  const mediaTypes = users
    .map((dataItem) => dataItem.categories) // get all media types
    .filter((mediaType, index, array) => array.indexOf(mediaType) === index); // filter out duplicates

  const counts = mediaTypes.map((mediaType) => ({
    type: mediaType,
    count: users.filter((item) => item.categories === mediaType).length,
  }));
  console.log(counts); 
console.log(mediaTypes);


//  const mediaTypes.map((mediaType) => ({
  
// })

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
                  {users
                    ? users.map((item) => (
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
                              <button onClick={() => newPage(item._id)} className="viewbutton">
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

                    {users
                      ? users.slice(0, 3).map((val) => (
                          <article className="item">
                            <a href="#" className="thumb">
                              <img src={val.bannerImage} alt="image" />
                            </a>
                            <div className="info">
                              <span>{val.date}</span>
                              <h4
                                className="title usmall"
                                onClick={() => newPage(val._id)}
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
                        {mediaTypes.map((mediaType) =>(
                        <li 
                        onClick={() => new1(mediaType)}
                        >   
                       <a
                      href=""
                      className=" d-flex justify-content-between align-items-center"
                    >
                             {mediaType}<span >( {
                                users.filter(
                          (item) => item.categories === mediaType
                                ).length
                               })</span>
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
    </div>
  );
}
export default Blog;
