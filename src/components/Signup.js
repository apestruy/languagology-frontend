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
  ErrorMessage,
} from "../styled";

class Signup extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    passwordRepeat: "",
    passwordError: false,
    usernameError: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      passwordError: false,
      usernameError: false,
    });
  };

  handleClear = () => {
    this.setState({
      name: "",
      username: "",
      password: "",
      passwordRepeat: "",
      passwordError: false,
      usernameError: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.passwordRepeat) {
      fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
          },
        }),
      })
        .then((resp) => resp.json())
        .then((result) => {
          if (result.error === "failed to create user") {
            // alert(result.error);
            // console.log("failed to create user");
            this.setState({ usernameError: true, passwordError: false });
          } else {
            console.log("all good");
            this.setState({ passwordError: false, usernameError: false });
          }
        });
    } else if (this.state.password !== this.state.passwordRepeat) {
      this.setState({ passwordError: true, usernameError: false });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <SignUpDiv>
          <Translateh2>Create Your Account</Translateh2>

          <SignUpForm onSubmit={this.handleSubmit}>
            <LabelDiv>Name</LabelDiv>
            <FormInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            ></FormInput>
            <LabelDiv>Username</LabelDiv>
            <FormInput
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            ></FormInput>
            {this.state.usernameError && (
              <ErrorMessage>
                This username is already taken{" "}
                <span role="img" aria-label="sad">
                  😔
                </span>
              </ErrorMessage>
            )}
            <LabelDiv>Password</LabelDiv>
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            ></FormInput>
            <LabelDiv>Confirm Password</LabelDiv>
            <FormInput
              type="password"
              name="passwordRepeat"
              value={this.state.passwordRepeat}
              onChange={this.handleChange}
              required
            ></FormInput>

            <BeginQuizButton onClick={this.handleClear}>Clear</BeginQuizButton>
            <BeginQuizButton>Sign Up</BeginQuizButton>
          </SignUpForm>
          {this.state.passwordError && (
            <ErrorMessage>
              Passwords do not match{" "}
              <span role="img" aria-label="sad">
                😔
              </span>
            </ErrorMessage>
          )}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <SignUpLink>Already have an account? Sign in!</SignUpLink>
          </Link>
        </SignUpDiv>
      </div>
    );
  }
}

export default Signup;
