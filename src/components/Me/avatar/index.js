import React from "react";
import s from "./styles.module.css";
import PropTypes from "prop-types";
const Avatar = ({ name, img }) => {
  return (
    <div className={s.avatar}>
      <img src={img} alt={name} width="200" />
      <p>{name}</p>
    </div>
  );
};

export default Avatar;

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
