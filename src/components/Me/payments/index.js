import React from "react";
import s from "./styles.module.css";
import PropTypes from "prop-types";
import list from "../../../../static/mocks/payments.json";
const Payments = () => {
  return (
    <div className={s.payments}>
      <h1>Платежи</h1>
      {list.map(({ id, number }) => (
        <div className={s.single} key={id}>
          <p>Покупка #{number}</p>
          <div className={s.check}></div>
        </div>
      ))}
    </div>
  );
};

export default Payments;
