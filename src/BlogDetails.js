import React from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import "../src/CSS/navbar.css";

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
  // const navigate = useNavigate;

  // handle delete function TO DELETE  a blog by id
  const handleClick = () => {
    fetch("http://localhost:3001/blogs/" + id, {
      method: "DELETE"
    }).then(() => {
      // navigate("/", { replace: true });
      // window.location.reload(true);
      window.location = "/";
    });
  };

  return (
    <>
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <div
            class="card mt-4"
            style={{
              width: "850px",
              height: "auto",
              textAlign: "center",
              marginLeft: "250px"
            }}
          >
            <h3 class="card-title mt-2">{blog.title}</h3>
            <h6 class="card-subtitle mb-2 text-muted">
              {" "}
              Author: {blog.author}
            </h6>
            <h6 class="card-subtitle mb-2 text-muted">
              {" "}
              Date Created: {blog.date}
            </h6>
            <img
              src={blog.img}
              class="card-img-top"
              alt="..."
              style={{ width: "auto", height: "30em" }}
            />
            <div class="card-body">
              <p class="card-text">{blog.body}</p>
              <Link to={"/"} className="m-4">
                <button class="btn mr-2">Go Back</button>
              </Link>
              <button class="btn mr-2" onClick={handleClick}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogDetails;
