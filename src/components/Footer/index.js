import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <hr />
      the ClassX {date}
    </footer>
  );
};

export default Footer;
