import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  // handle submit function
  const handleSubmit = (e) => {
    // prevents the page from refreshing
    e.preventDefault();

    // blog object
    const blog = { title, body, author };

    console.log(blog);
  };

  return (
    <>
      <h3>Create A New Blog</h3>
      <form onSubmit={handleSubmit}>
        {/* < onSubmit={handleSubmit}> */}
        <div className="mb-3">
          <label className="form-label">Blog Title:</label>
          <input
            type="text"
            placeholder="Write title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Author:</label>
          <input
            type="text"
            placeholder="Blog author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Enter Title" className="form-label">
            Blog Body:
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button className="mt-2 rounded-1">Post Blog</button>
        </div>
      </form>
      <div>
        {" "}
        {/* outputing the blog body */}
        <p>
          Title:
          <br /> {title}
        </p>
        <p>
          Author:
          <br /> {author}
        </p>
        <p>
          Body: <br />
          {body}
        </p>
      </div>
    </>
  );
}

export default Create;
