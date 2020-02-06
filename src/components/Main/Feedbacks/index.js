import React from "react";
import Feedback from "./feedback";
import "./styles.css";
const Feedbacks = ({ feedbacks }) => {
  return (
    <>
      <h2 className="feedbacks-h2">Отзывы</h2>
      <div className="feedbacks">
        {feedbacks.map((f, i) => (
          <Feedback {...f} key={i} />
        ))}
      </div>
    </>
  );
};

export default Feedbacks;
