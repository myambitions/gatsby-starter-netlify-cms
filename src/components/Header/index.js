import React, { useContext } from "react";
import logo from "../../img/logo.svg";
import profile from "../../img/github-icon.svg";
import { Link } from "gatsby";
import Divider from "../Divider";
import { ApiContext } from "../api";

const Header = () => {
  const { user } = useContext(ApiContext);
  return (
    <header>
      <img src={logo} alt="classx logo" width="100" />

      <nav>
        <Link to="/my-courses" title="Courses">
          Courses
        </Link>
        <Divider />
        {user ? (
          <img src={profile} alt="profile avatar" height="100" />
        ) : (
          <p onClick={alert("login will come soon")}>Log in</p>
        )}
      </nav>
    </header>
  );
};

export default Header;
