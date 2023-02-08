import React, { useState } from 'react';

const LikeButton = ({ blogId, likes }) => {
  const [numLikes, setNumLikes] = useState(likes);

  const handleLikeClick = () => {
    setNumLikes(numLikes + 1);

    fetch(`/api/blogs/${blogId}/likes`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <p>Likes: {numLikes}</p>
      <button onClick={handleLikeClick}>Like</button>
    </div>
  );
};

export default LikeButton;