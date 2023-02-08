import React from "react";
import { Link } from "react-router-dom";
import "../src/CSS/bloglist.css";

function BlogList({ blogs }) {
  //   const blogs = props.blogs

  return (
    <>
      {/* <div class="">
  <div class="row">
    <div class="col"></div> */}
      <div class="container text-center">
        {/*mapping each blog  */}
        {blogs.map((blog) => (
          <div class="row justify-content-around">
            <div class="col-" key={blog.id}>
              {/* linking to each individual blog by id */}
              <Link to={`/blogs/${blog.id}`}>
                <div class="card mt-4" >
                <h3 class="card-title mt-2">{blog.title}</h3>
                <h6 class="card-subtitle mb-2 text-muted">
                      {" "}
                      Author: {blog.author}
                    </h6>
                  <img
                    src={blog.img}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "auto", height: "30em" }}
                  />
                  <div class="card-body">
                   
                   
                    <p class="card-text">{blog.body}</p>
                    <a href="/" class="btn mr-2">
                      Read More
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogList;

// {/*
// <div className="row">
//   <div className="col text-center">
//     {/* mapping each blog  */}
//     // {blogs.map((blog) => (
//     //   <div className="container text-center">
//     //     <div className="row">
//     //       <div className="col-6">
//     //         <div className="card-body m-2">
//               {/* linking to each individual blog by id */}
//               {/* <Link to={`/blogs/${blog.id}`}>
//                 <h5 className="card-title">Title: {blog.title}</h5>
//                 <p>Written by: {blog.author}</p>
//                 <p className="card-text">{blog.body}</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div> */}
// {/* //  </div>; */}
// //
