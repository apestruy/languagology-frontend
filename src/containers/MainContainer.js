import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ProfileContainer from "./ProfileContainer";
import TranslationForm from "../components/TranslationForm";
import QuizContainer from "./QuizContainer";
import WrongLink from "../components/WrongLink";

const MainContainer = (props) => {
  return (
    <div>
      <div> MainContainer </div>
      <Login />
      <Signup />
      <ProfileContainer />
      <TranslationForm />
      <QuizContainer />
      <WrongLink />
    </div>
  );
};

export default MainContainer;
