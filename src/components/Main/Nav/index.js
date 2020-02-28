import React, { useContext } from "react";
import { Link } from "gatsby";
import Divider from "../../Divider";
import "./styles.css";
import { ApiContext } from "../../api";
const Nav = ({ open }) => {
  const { user } = useContext(ApiContext);
  return (
    <nav>
      <Link to="/about" title="About">
        About
      </Link>
      <Divider type="secondary" />
      <Link to="/courses" title="Courses">
        Courses
      </Link>
      <Divider type="secondary" />
      {user ? (
        <Link to="/profile" title="Profile">
          Profile
        </Link>
      ) : (
        <p onClick={open}>Log in</p>
      )}
    </nav>
  );
};

export default Nav;
