import React from "react";
import "./styles.css";
const Features = ({ items }) => (
  <div className="features">
    {items.map(({ text }, i) => (
      <p key={i}>{text}</p>
    ))}
  </div>
);

export default Features;
