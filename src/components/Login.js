import React from "react";
import { Link } from "react-router-dom";
import {
  SignUpForm,
  SignUpDiv,
  FormInput,
  LabelDiv,
  Translateh2,
  BeginQuizButton,
  SignUpLink,
} from "../styled";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClear = () => {
    this.setState({ username: "", password: "" });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <SignUpDiv>
          <Translateh2>Sign In</Translateh2>

          <SignUpForm>
            <LabelDiv>Username</LabelDiv>
            <FormInput
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            ></FormInput>
            <LabelDiv>Password</LabelDiv>
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            ></FormInput>

            <BeginQuizButton onClick={this.handleClear}>Clear</BeginQuizButton>
            <BeginQuizButton>Sign In</BeginQuizButton>
          </SignUpForm>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <SignUpLink>Don't have an account? Sign up!</SignUpLink>
          </Link>
        </SignUpDiv>
      </div>
    );
  }
}

export default Login;
