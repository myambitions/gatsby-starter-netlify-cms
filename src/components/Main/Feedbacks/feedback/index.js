import React from "react";

const Feedback = ({ text, image }) => (
  <div className="feedback">
    <p>{text}</p>
    <img src={image} alt="" />
  </div>
);

export default Feedback;
