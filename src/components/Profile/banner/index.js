import React from "react";
import s from "./styles.module.css";

const Banner = ({ img }) => (
  <img src={img} alt="banner preview" className={s.img} />
);

export default Banner;
