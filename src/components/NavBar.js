import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>Languagology</div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/translate">Translate</Link>
      <Link to="/quiz">Quiz</Link>
    </div>
  );
};

export default NavBar;
