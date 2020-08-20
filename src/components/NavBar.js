import React from "react";
import { Link } from "react-router-dom";
import { NavButton, AppNameH1 } from "../styled";

const NavBar = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <AppNameH1>Languagology</AppNameH1>
      </div>
      <Link to="/login">
        <NavButton>
          <strong>Login</strong>
        </NavButton>
      </Link>
      <Link to="/signup">
        <NavButton>
          <strong>Sign Up</strong>
        </NavButton>
      </Link>
      <Link to="/profile">
        <NavButton>
          <strong>Profile</strong>
        </NavButton>
      </Link>
      <Link to="/translate">
        <NavButton>
          <strong>Translate</strong>
        </NavButton>
      </Link>
      <Link to="/quiz">
        <NavButton>
          <strong>Quiz</strong>
        </NavButton>
      </Link>
    </div>
  );
};

export default NavBar;
