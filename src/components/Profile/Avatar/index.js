import React from "react";
import "./styles.css";

const Avatar = ({ img, size }) => {
  return <img src={img} width="150" height="150" alt="avatar" />;
};

export default Avatar;
