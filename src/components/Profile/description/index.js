import React from "react";
import s from "./styles.module.css";
import PropTypes from "prop-types";
const Description = ({ author, description }) => {
  return (
    <div className={s.description}>
      <p className={s.author}>Автор: {author}</p>
      <p className={s.text}>Описание: {description}</p>
    </div>
  );
};

Description.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Description;
