import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
const Divider = ({ type = "primary" }) => (
  <div className={type === "primary" ? "primary" : "secondary"} />
);
Divider.propTypes = {
  type: PropTypes.string
};
export default Divider;
