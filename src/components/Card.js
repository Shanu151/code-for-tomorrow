import React from "react";
import styles from "../styles/styles.css";

const Card = ({ post, onRemove }) => {
  const truncatedTitle = post.title.slice(0, 30);
  const truncatedBody = post.body.slice(0, 110);

  // Get the current date and time in the desired format
  const currentDateAndTime = new Date().toLocaleString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });

  return (
    <div className={styles.card}>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => onRemove(post.id)}
      ></button>
      <h4>{truncatedTitle}</h4>
      <p>{truncatedBody}</p>
      <strong className="" style={{ color: " #00000059" }}>
        {currentDateAndTime}
      </strong>
    </div>
  );
};

export default Card;
