import React from "react";
import ResultCard from "../components/ResultCard";
import { ProfileTitle } from "../styled";

class QuizResults extends React.Component {
  renderResults = () => {
    let quizResultsToRender = this.props.quizzes;
    let listItems = quizResultsToRender.map((quiz) => {
      return (
        <li key={quiz.id}>
          <ResultCard
            quiz={quiz}
            quizTranslations={this.props.quizTranslations}
          />
        </li>
      );
    });
    return <ol> {listItems} </ol>;
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
