import React from "react";
import KeyList from "../components/KeyList";
import ValueList from "../components/ValueList";
import Score from "../components/Score";

const QuizContainer = (props) => {
  return (
    <div>
      <Score score={props.score} />
      <KeyList />
      <ValueList />
    </div>
  );
};

export default QuizContainer;
