import React from "react";
import { Link } from "react-router-dom";
import { NavButton, AppNameH1, NavDiv } from "../styled";

const NavBar = (props) => {
  return (
    <div>
      {!props.userId && (
        <div>
          <AppNameH1>Languagology</AppNameH1>
          <Link to="/login">
            <NavButton>
              <strong>Sign In</strong>
            </NavButton>
          </Link>
        </div>
      )}

      {props.userId && (
        <div>
          <AppNameH1>Languagology</AppNameH1>
          <NavDiv style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
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
              <Link to="/login">
                <NavButton onClick={props.clearUser}>
                  <strong>Log Out</strong>
                </NavButton>
              </Link>
            </div>
          </NavDiv>
        </div>
      )}
    </div>
  );
};

export default NavBar;
