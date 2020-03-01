import React from "react";
import Avatar from "./avatar";
import Form from "./form";
import s from "./styles.module.css";
const Edit = ({ submit, name, img }) => (
  <div className={s.edit}>
    <Avatar name={name} img={img} />
    <Form onSubmit={submit} />
  </div>
);

export default Edit;
