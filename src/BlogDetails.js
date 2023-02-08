import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

function BlogDetails() {
  // params grabbing them from routes
  const { id } = useParams();
  //   showing blog details per id
  const {
    data: blog,
    error,
    isLoading
  } = UseFetch("http://localhost:3001/blogs/" + id);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>Written By: {blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
