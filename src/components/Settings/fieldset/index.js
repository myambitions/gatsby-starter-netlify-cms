import React from "react";
import s from "./styles.module.css";

const Fieldset = ({ title, rule, onChange }) => {
  return (
    <div className={s.f}>
      <p>{title}</p>
      <div className={s.control}>
        <p>{rule}</p>
        <input type="checkbox" onChange={onChange} />
      </div>
    </div>
  );
};

export default Fieldset;
