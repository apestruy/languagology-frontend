import React from "react";
import { ResultsInputDiv, ResultsOutputDiv } from "../styled";

const ResultCardTranslations = (props) => {
  return (
    <div>
      <ResultsInputDiv>{props.translation.translation.input}</ResultsInputDiv>
      <ResultsOutputDiv>
        {props.translation.translation.output}
      </ResultsOutputDiv>
    </div>
  );
};

export default ResultCardTranslations;
