import React from "react";
import PropTypes from "prop-types";
import s from "./styles.module.css";
const Features = ({ list }) => {
  const mappedList = list.split(",");
  return (
    <div className={s.features}>
      {mappedList.map((l, i) => (
        <p key={i}>{l}</p>
      ))}
    </div>
  );
};

export default Features;

Features.propTypes = {
  list: PropTypes.string
};
