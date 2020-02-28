import React from "react";
import s from "./styles.module.css";

const Preview = ({ video }) => (
  // ! temporary here will be a image
  <img className={s.img} src={video} alt="preview" />
);

export default Preview;
