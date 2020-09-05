import React from "react";
import ResultCard from "../components/ResultCard";
import { ProfileTitle, Li, Ol } from "../styled";

class QuizResults extends React.Component {
  renderResults = () => {
    let quizResultsToRender = this.props.quizzes;
    let listItems = quizResultsToRender.map((quiz) => {
      return (
        <Li key={quiz.id}>
          <ResultCard
            quiz={quiz}
            quizTranslations={this.props.quizTranslations}
            translations={this.props.translations}
          />
        </Li>
      );
    });
    return <Ol> {listItems} </Ol>;
  };

  render() {
    // console.log(this.props.quizTranslations);
    return (
      <div>
        <ProfileTitle>Quiz Results</ProfileTitle>
        {this.renderResults()}
      </div>
    );
  }
}

export default QuizResults;
