import React from "react";
import s from "./styles.module.css";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className={s.f}>
        <div className={s.menu}>
          <h6>Contacts</h6>
          <a href="#">WhatsApp</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
        <div className={s.stay}>
          <h6>Stay up to date</h6>
          <form>
            <input type="text" placeholder="Ваш email" />
          </form>
        </div>
      </div>
      <hr />
      <em>theClassX {date} &copy; all rights reserved</em>
    </footer>
  );
};

export default Footer;
