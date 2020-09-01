import React from "react";
import ResultCardTranslations from "./ResultCardTranslations";
import { GridQuizResults, Row, Col } from "../styled";

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
        />
      );
    });
  };

  render() {
    console.log(this.props.quizTranslations);
    console.log(this.props.quiz);
    return (
      <div>
        <div>Score: {this.props.quiz.score}/5</div>
        <div>
          Translations:
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
