import React, { useState } from "react";

function LikeButton({ id }) {
  // Create a state variable to store the number of likes
  const [likeCount, setLikeCount] = useState(0);

  // Define an onClick event handler that updates the state variable and sends a request to the server
  const handleLikeClick = async () => {
    setLikeCount(likeCount + 1);
    try {
      const response = await fetch(`http://localhost:3000/blogs/likes`+ id, {
        method: "POST",
        body: JSON.stringify({ likeCount: likeCount + 1 }),
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error("Failed to update like count");
      }
    } catch (error) {
      console.error(error);
      // Roll back the state update if the request failed
      setLikeCount(likeCount + 1);
    }
  };

  // Use the state variable to display the number of likes in the UI
  return (
    <div>
      <button onClick={handleLikeClick}>❤️</button>
      <p>{likeCount} likes</p>
    </div>
  );
}
export default LikeButton;
