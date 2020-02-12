import React from "react";
import s from "./styles.module.css";

const Modal = ({ title, children, handleClose }) => {
  return (
    <div className={s.modal}>
      <div className={s.block}>
        <div className={s.title}>
          <p>{title}</p>
          <span onClick={handleClose}>X</span>
        </div>
        <div className={s.body}>{children}</div>
      </div>
      <div className={s.overlay} onClick={handleClose}></div>
    </div>
  );
};
export default Modal;
