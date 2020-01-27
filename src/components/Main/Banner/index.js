import React from "react";
import Nav from "../Nav";
import "./styles.css";
const Banner = ({ title, subtitle, img }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          !!img && !!img.childImageSharp ? img.childImageSharp.fluid.src : img
        })`
      }}
    >
      <div className="content">
        <Nav />
        <p>Our company</p>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
      <div className="overlay" />
    </div>
  );
};

export default Banner;
