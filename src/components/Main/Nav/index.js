import React from "react";
import { Link } from "gatsby";
import Divider from "../../Divider";
import "./styles.css";
const Nav = () => (
  <nav>
    <Link to="/about" title="About">
      About
    </Link>
    <Divider type="secondary" />
    <Link to="/courses" title="Courses">
      Courses
    </Link>
    <Divider type="secondary" />
    <Link to="/login" title="Log in">
      Log in
    </Link>
  </nav>
);

export default Nav;
