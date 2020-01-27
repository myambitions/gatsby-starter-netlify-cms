import React from "react";
import "./styles.css";
const Member = ({ image, position, name }) => (
  <div className="member">
    <img src={image} alt={name} />
    <p>{position}</p>
  </div>
);

export default Member;
