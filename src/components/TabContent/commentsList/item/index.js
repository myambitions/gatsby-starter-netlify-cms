import React from "react";
import s from "./styles.module.css";

const Item = ({ name, comment }) => {
  return (
    <div className={s.item}>
      <div className={s.name}>
        <p>@{name}</p>
      </div>
      <div className={s.comment}>{comment}</div>
    </div>
  );
};

export default Item;
