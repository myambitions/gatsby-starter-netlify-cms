import React from "react";
import PropTypes from "prop-types";
import s from "./styles.module.css";
const Knowledge = ({ know, learn }) => {
  return (
    <div className={s.knowledge}>
      <div className={s.learn}>
        <h5>Что вы узнаете?</h5>
        <p>{know}</p>
      </div>
      <div className={s.learn}>
        <h5>Чему вы научитесь?</h5>
        <p>{learn}</p>
      </div>
    </div>
  );
};

export default Knowledge;

Knowledge.propTypes = {
  know: PropTypes.string.isRequired,
  learn: PropTypes.string.isRequired
};
