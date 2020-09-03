import React from "react";
import { ResultsInputDiv, ResultsOutputDiv, ResultsDiv } from "../styled";

const ResultCardTranslations = (props) => {
  const backgroundColor =
    props.translation.correct === "yes" ? "#5cd65c" : "#ff4000";
  return (
    <ResultsDiv>
      <ResultsInputDiv style={{ background: backgroundColor }}>
        {props.translation.translation.input}
      </ResultsInputDiv>
      <ResultsOutputDiv style={{ background: backgroundColor }}>
        {props.translation.translation.output}
      </ResultsOutputDiv>
    </ResultsDiv>
  );
};

export default ResultCardTranslations;
