import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseFetch from "./UseFetch";

function BlogDetails() {
  // params grabbing them from routes
  const { id } = useParams();
  // showing blog details per id
  const {
    data: blog,
    error,
    isLoading
  } = UseFetch("http://localhost:3001/blogs/" + id);
  // going back to the home page
  const navigate = useNavigate;

  // handle delete function TO DELETE  a blog by id
  const handleClick = () => {
    fetch("http://localhost:3001/blogs/" + id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Written By: {blog.author}</p>
          <p>{blog.body}</p>
          <button className="mt-3 rounded-3" onClick={handleClick}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
