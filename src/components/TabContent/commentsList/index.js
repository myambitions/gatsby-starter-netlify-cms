import React from "react";
import Item from "./item";
import s from "./styles.module.css";
const CommentsList = ({ comments }) => {
  return (
    <div className={s.comments}>
      {comments?.map((c, i) => (
        <Item key={i} {...c} />
      ))}
    </div>
  );
};

export default CommentsList;
