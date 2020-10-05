import React from "react";
import {
  SignUpForm,
  SignUpDiv,
  FormInput,
  Label,
  Translateh2,
  BeginQuizButton,
} from "../styled";

const Signup = (props) => {
  return (
    <div>
      <SignUpDiv>
        <Translateh2>Create Account</Translateh2>

        <SignUpForm>
          <Label htmlFor="username">Username</Label>
          <FormInput type="text" name="username" required></FormInput>
          <br></br>
          <Label htmlFor="password">Password</Label>
          <FormInput type="password" name="password" required></FormInput>
          <br></br>
          <Label htmlFor="password-repeat">Confirm Password</Label>
          <FormInput
            type="password"
            name="password-repeat"
            required
          ></FormInput>

          <BeginQuizButton type="button">Clear</BeginQuizButton>
          <BeginQuizButton type="submit">Sign Up</BeginQuizButton>
        </SignUpForm>
      </SignUpDiv>
    </div>
  );
};

export default Signup;
