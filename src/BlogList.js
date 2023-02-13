import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/CSS/bloglist.css";

function BlogList({ blogs }) {
  //   const blogs = props.blogs
  // to display more content when a user clicks readmore
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <div class="container text-center">
        <div class="row row row-cols-1 row-cols-md-2 g-4 justify-content-around">
          {/*mapping each blog  */}
          {blogs.map((blog) => (
            <div class="col" key={blog.id}>
              <div class="card mt-4">
                <h4 class="card-title mt-2">{blog.title}</h4>
                <h6 class="card-subtitle mb-2 text-decoration-none text-muted ">
                  {" "}
                  Author: {blog.author} <br /> Date: {blog.date}
                </h6>
                <img
                  src={blog.img}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "auto", height: "20em" }}
                />

                <p>
                  {!isExpanded
                    ? blog.body.substring(0, 100) + "..."
                    : blog.body}
                </p>
                {/* linking to each individual blog by id */}
                <Link className="text-decoration-none" to={`/blogs/${blog.id}`}>
                  <button
                    class="btn mr-2 text-align-center w-25"
                    onClick={toggleExpanded}
                    style={{ textDecoration: "none" }}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </Link>
              </div>

              <div>
                <div class="row">
                  <div class="col-6">
                    <button
                      class="btn m-lg-1 "
                      style={{ textDecoration: "none" }}
                    >
                      Comments
                    </button>
                  </div>
                  <div class="col-4">
                    <button
                      class="btn m-lg-1"
                      style={{ textDecoration: "none" }}
                    >
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
