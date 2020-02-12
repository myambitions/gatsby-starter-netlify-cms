import React from "react";
import Item from "./item";
import s from "./styles.module.css";
const QAList = ({ qa }) => {
  return (
    <div className={s.qaList}>
      <div className={s.qaM}>
        <p>Часто задаваемые вопросы</p>
        <p>Задать вопрос</p>
      </div>
      {qa?.map((c, i) => (
        <Item key={i} {...c} />
      ))}
    </div>
  );
};

export default QAList;
