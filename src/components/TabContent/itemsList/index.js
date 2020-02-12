import React from "react";
import Item from "./item";
import s from "./styles.module.css";
const TabItems = ({ plan, step }) => {
  return (
    <div className={s.items}>
      {plan?.map((c, i) => (
        <Item key={i} {...c} step={step} />
      ))}
    </div>
  );
};

export default TabItems;
