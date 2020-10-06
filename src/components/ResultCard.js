import React from "react";
import ResultCardTranslations from "./ResultCardTranslations";
import { GridQuizResults, Row, ScoreDiv, InstructionDiv } from "../styled";

class ResultCard extends React.Component {
  filterTranslations = () => {
    let allTranslations = this.props.quizTranslations;
    let filteredTranslations = allTranslations.filter(
      (Translation) => Translation.quiz.id === this.props.quiz.id
    );
    return filteredTranslations;
  };

  renderTranslations = () => {
    return this.filterTranslations().map((translation) => {
      return (
        <ResultCardTranslations
          translation={translation}
          key={translation.id}
          translations={this.props.translations}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <InstructionDiv>
          Click on translation to see the language
        </InstructionDiv>
        <ScoreDiv>Score: {this.props.quiz.score}/5</ScoreDiv>
        <div>
          <GridQuizResults>
            <Row>
              <div>{this.renderTranslations()}</div>
            </Row>
          </GridQuizResults>
        </div>
      </div>
    );
  }
}

export default ResultCard;
