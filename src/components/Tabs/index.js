import React from "react";
import s from "./styles.module.css";
const t = [
  { id: 1, title: "План урока" },
  { id: 2, title: "Ресурсы" },
  { id: 3, title: "Q&A" },
  { id: 4, title: "Сообщество" }
];
const Tabs = ({ children, handleTabStep }) => {
  return (
    <>
      <div className={s.tabs}>
        {t.map(({ id, title }) => {
          const click = () => {
            handleTabStep(id);
          };
          return (
            <p key={id} onClick={click}>
              {title}
            </p>
          );
        })}
      </div>
      {children}
    </>
  );
};

export default Tabs;
