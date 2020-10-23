import React from "react";
import ResultCard from "../components/ResultCard";
import { ProfileTitle, Li, Ol, ProfileInstructions } from "../styled";

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
    return (
      <div>
        {this.renderResults().props.children[1].length === 0 ? (
          <div>
            <ProfileTitle>No Quiz Results Yet</ProfileTitle>
            <ProfileInstructions>
              Get quizzed on your translations on the Quiz Page
            </ProfileInstructions>
          </div>
        ) : (
          <div>
            <ProfileTitle>
              {sessionStorage.name.charAt(0).toUpperCase() +
                sessionStorage.name.slice(1)}
              's Quiz Results
            </ProfileTitle>
            {this.renderResults()}
          </div>
        )}
      </div>
    );
  }
}

export default QuizResults;
