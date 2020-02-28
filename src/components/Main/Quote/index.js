import React from "react";
import "./styles.css";
const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <hr />
      <i>{quote}</i>
      <hr />
    </div>
  );
};

export default Quote;
