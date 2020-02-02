import React from "react";
import "./styles.css";
const Features = ({ items }) => (
  <div className="features">
    {items.map(({ text }) => (
      <p>{text}</p>
    ))}
  </div>
);

export default Features;
