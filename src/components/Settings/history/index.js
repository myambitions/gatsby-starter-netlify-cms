import React from "react";
import s from "./styles.module.css";

const History = () => {
  return (
    <div className={s.history}>
      <p>История оплат</p>
      <div className={s.table}>
        <div className={s.th}>
          <span>Date</span>
          <span>Course Name</span>
          <span>Summ</span>
        </div>
        <div className={s.tr}>
          <span>12.12.12</span>
          <span>first native course</span>
          <span>10000 tg</span>
        </div>
      </div>
    </div>
  );
};

export default History;
