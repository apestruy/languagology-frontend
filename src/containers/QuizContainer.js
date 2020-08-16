import React from "react";
import KeyList from "../components/KeyList";
import ValueList from "../components/ValueList";
import Score from "../components/Score";

const QuizContainer = (props) => {
  return (
    <div>
      <div> QuizContainer </div>
      <KeyList />
      <ValueList />
      <Score />
    </div>
  );
};

export default QuizContainer;
