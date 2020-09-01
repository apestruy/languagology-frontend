import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ProfileContainer from "./ProfileContainer";
import TranslationForm from "../components/TranslationForm";
import QuizContainer from "./QuizContainer";
import WrongLink from "../components/WrongLink";

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [],
      translations: [],
      quizzes: [],
      quizTranslations: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/translations")
      .then((resp) => resp.json())
      .then((translations) => {
        fetch("http://localhost:3000/api/v1/languages")
          .then((resp) => resp.json())
          .then((languages) => {
            fetch("http://localhost:3000/api/v1/quizzes")
              .then((resp) => resp.json())
              .then((quizzes) => {
                fetch("http://localhost:3000/api/v1/quiz_translations")
                  .then((resp) => resp.json())
                  .then((quizTranslations) => {
                    this.setState({
                      languages: languages,
                      translations: translations,
                      quizzes: quizzes,
                      quizTranslations: quizTranslations,
                    });
                  });
              });
          });
      });
  }

  handleSavedTranslation = (newTranslation) => {
    this.setState({
      translations: [...this.state.translations, newTranslation],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/profile"
            render={(props) => (
              <ProfileContainer
                {...props}
                translations={this.state.translations}
                quizzes={this.state.quizzes}
                quizTranslations={this.state.quizTranslations}
              />
            )}
          />
          <Route
            path="/translate"
            render={(props) => (
              <TranslationForm
                {...props}
                languages={this.state.languages}
                handleSavedTranslation={this.handleSavedTranslation}
              />
            )}
          />
          <Route path="/quiz" component={QuizContainer} />
          <Route component={WrongLink} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
