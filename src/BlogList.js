import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  //   const blogs = props.blogs

  return (
    <>
      <h2 className="container text-center mt-3">All Blogs</h2>
      <div className="row">
        <div className="col text-center">
          {" "}
          {/*mapping each blog  */}
          {blogs.map((blog) => (
            <div className="container text-center">
              <div className="row" key={blog.id}>
                <div className="col-6">
                  <div className="card-body m-2">
                    {/* linking to each individual blog */}
                    <Link to={`/blogs/${blog.id}`}>
                      <h5 className="card-title">Title: {blog.title}</h5>
                      <p>Written by: {blog.author}</p>
                      {/* <p className="card-text">{blog.body}</p> */}
                    </Link>
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
