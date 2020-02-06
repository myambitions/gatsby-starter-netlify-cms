import React from "react";
import "./styles.css";

const Modal = ({ title, children, handleClose }) => {
  return (
    <div className="modal">
      <div className="modal-block">
        <div className="modal-title">
          <p>{title}</p>
          <span onClick={handleClose}>X</span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
      <div className="overlay" onClick={handleClose}></div>
    </div>
  );
};
export default Modal;
