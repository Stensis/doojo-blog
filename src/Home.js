import React, { useState, useEffect } from "react";
import UseFetch from "./UseFetch";
import BlogList from "./BlogList";
import "../src/CSS/homepage.css";

function Home() {
  // move to the top
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // displaying all the blogs
  const {
    data: blogs,
    isLoading,
    error
  } = UseFetch("http://localhost:3000/blogs");

  return (
    <>
      <div>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading ...</div>}
        {blogs && <BlogList blogs={blogs} />}{" "}
      </div>
      <div>
      {showButton && (
        <button
          onClick={handleClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor:" #62add6",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "block",
            zIndex: "999"
          }}
        >
          Move to the Top
        </button>
      )}
      </div>
    </>
  );
}

export default Home;
