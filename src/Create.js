import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/CSS/create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date());
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // handle submit function
  const handleSubmit = (e) => {
    // prevents the page from refreshing
    e.preventDefault();

    // blog object
    const blog = { title, body, author, img ,date};

    setIsLoading(true);

    // adding a new blog to the db/json
    fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added succesfully");
      setIsLoading(false);
      navigate("/");
    });
  };

  return (
    <>





      <div>
        <h3 className=" m-3 ">Create A New Blog Here ...</h3>
      </div>
      <div id="wrapper">
        <form id="paper" method="get" action="" onSubmit={handleSubmit}>
          <div id="margin">
            Title:{" "}
            <input
              id="title"
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div id="margin">
            Image Url:{" "}
            <input
              id="title"
              type="text"
              name="title"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <textarea
            id="text"
            name="text"
            rows="4"
            style={{
              overflow: " hidden",
              wordWrap: " break-word",
              resize: "none",
              height: "195px",
              width: "28em"
            }}
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          
          <div id="margin">
          
        
            Date:{" "}
            <input
              id="title"
              type="text"
              name="title"
              value={date.toDateString()}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div id="margin">
            Author:{" "}
            <input
              id="title"
              type="text"
              name="title "
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <br />
          <div>
            {!isloading && <input id="button" type="submit" value="Create" />}
            {isloading && <input id="button" type="submit" value="Adding " />}
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;

// <form onSubmit={handleSubmit}>
//   {/* < onSubmit={handleSubmit}> */}
//   <div className="mb-3">
//     <label className="form-label">Blog Title:</label>
//     <input
//       type="text"
//       placeholder="Write title here"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//     />
//   </div>
//   <div>
//     <label>Blog Author:</label>
//     <input
//       type="text"
//       placeholder="Blog author"
//       value={author}
//       onChange={(e) => setAuthor(e.target.value)}
//     />
//   </div>

//   <div className="mb-3">
//     <label htmlFor="Enter Title" className="form-label">
//       Blog Body:
//     </label>
//     <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
//   </div>

//   <div>
//     {!isloading && <button className="mt-2 rounded-1">Add Blog</button>}
//     {isloading && (
//       <button disabled className="mt-2 rounded-1">
//         adding blog ....
//       </button>
//     )}
//   </div>
// </form>;
