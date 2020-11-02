import React from "react";
import { Link, Redirect } from "react-router-dom";
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

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    invalidLogin: false,
    redirect: null,
    loading: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      invalidLogin: false,
    });
  };

  handleClear = () => {
    this.setState({ username: "", password: "", invalidLogin: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true }, () => {
      fetch("https://languagology.herokuapp.com/api/v1/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password,
          },
        }),
      })
        .then((resp) => resp.json())
        .then((result) => {
          if (result.message === "Invalid username or password") {
            this.setState({ loading: false, invalidLogin: true });
          } else {
            fetch("https://languagology.herokuapp.com/api/v1/profile", {
              headers: {
                Authorization: `Bearer ${result.jwt}`,
              },
            })
              .then((resp) => resp.json())
              .then((result2) => {
                sessionStorage.clear();
                sessionStorage.userId = result2.user.id;
                sessionStorage.jwt = result.jwt;
                sessionStorage.name = result2.user.name;
                this.props.handleLogin();
                this.setState({
                  loading: false,
                  invalidLogin: false,
                  redirect: "/profile",
                });
              });
          }
        });
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <SignUpDiv>
          <Translateh2>Sign In</Translateh2>

          <SignUpForm onSubmit={this.handleSubmit}>
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

            {this.state.invalidLogin && (
              <ErrorMessage>
                "Invalid username or password"{" "}
                <span role="img" aria-label="sad">
                  😔
                </span>
              </ErrorMessage>
            )}

            <BeginQuizButton>Sign In</BeginQuizButton>
            <BeginQuizButton onClick={this.handleClear}>Clear</BeginQuizButton>
          </SignUpForm>

          {this.state.loading && (
            <img
              src="https://media.giphy.com/media/jPMTCdfeo0AQx3iyid/giphy.gif"
              alt="loading"
              width="80"
            />
          )}

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <SignUpLink>Don't have an account? Sign up!</SignUpLink>
          </Link>
        </SignUpDiv>
      </div>
    );
  }
}

export default Login;
