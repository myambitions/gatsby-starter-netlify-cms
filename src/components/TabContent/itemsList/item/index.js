import React, { useState, useEffect } from "react";
import s from "./styles.module.css";
const Item = ({ id, name, duration, description, step }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  useEffect(() => {
    setActive(false);
  }, [step]);
  return (
    <div className={s.item}>
      <div className={s.name} onClick={handleClick}>
        <p>{id}.&nbsp;</p>
        <p>{name}</p>
      </div>
      {active && step === 1 && (
        <div className={s.duration}>Длительность {duration}</div>
      )}
      {active && step === 2 && <div className={s.duration}>{description}</div>}
    </div>
  );
};

export default Item;
