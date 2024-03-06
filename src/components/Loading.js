// components/Loading.js
import React from "react";
import Loader from "../styles/Loader.css";
import cftomorrow from "../Images/code-for-tomorrow.png";

const Loading = () => {
  return (
    <div className="loadanimation">
      <div class="loader"></div>
      <img src={cftomorrow} alt="Description of your image" />
    </div>
  );
};

export default Loading;
