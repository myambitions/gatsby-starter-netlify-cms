import React from "react";
import s from "./styles.module.css";

const Item = ({ id, question, answer }) => {
  return (
    <div className={s.item}>
      <div className={s.question}>
        <p>{question}</p>
      </div>
      <div className={s.answer}>{answer}</div>
    </div>
  );
};

export default Item;
