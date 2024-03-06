// components/Card.js
import React from "react";

const Card = ({ post, onRemove }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => onRemove(post.id)}>Remove</button>
    </div>
  );
};

export default Card;
