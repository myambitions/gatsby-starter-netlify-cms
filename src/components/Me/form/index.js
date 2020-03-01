import React from "react";
import s from "./styles.module.css";
import PropTypes from "prop-types";
const Form = ({ onSubmit }) => {
  const mock = {
    name: "Odmen",
    email: "odmen@classx.kz",
    bday: "12.12.12",
    city: "Nur-Sultan (net)"
  };
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.formControl}>
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          placeholder="enter your name"
          defaultValue={mock.name}
        />
      </div>
      <div className={s.formControl}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="enter your email"
          defaultValue={mock.email}
        />
      </div>
      <div className={s.formControl}>
        <label htmlFor="bday">Birthday</label>
        <input
          type="text"
          placeholder="enter your birth date"
          defaultValue={mock.bday}
        />
      </div>
      <div className={s.formControl}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="enter your city"
          defaultValue={mock.city}
        />
      </div>

      <button type="submit">Редактировать</button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func
};
