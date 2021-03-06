import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ProfileContainer from "./ProfileContainer";
import TranslationForm from "../components/TranslationForm";
import QuizPage from "./QuizPage";
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
    this.sessionStored();
  }

  sessionStored = () => {
    if (sessionStorage.userId && sessionStorage.jwt) {
      fetch("https://languagology.herokuapp.com/api/v1/translations", {
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
        },
      })
        .then((resp) => resp.json())
        .then((translations) => {
          fetch("https://languagology.herokuapp.com/api/v1/languages", {
            headers: {
              Authorization: `Bearer ${sessionStorage.jwt}`,
            },
          })
            .then((resp) => resp.json())
            .then((languages) => {
              fetch("https://languagology.herokuapp.com/api/v1/quizzes", {
                headers: {
                  Authorization: `Bearer ${sessionStorage.jwt}`,
                },
              })
                .then((resp) => resp.json())
                .then((quizzes) => {
                  fetch(
                    "https://languagology.herokuapp.com/api/v1/quiz_translations",
                    {
                      headers: {
                        Authorization: `Bearer ${sessionStorage.jwt}`,
                      },
                    }
                  )
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
  };

  handleLogin = () => {
    this.sessionStored();
    this.props.setUser(parseInt(sessionStorage.userId));
  };

  handleSavedTranslation = (newTranslation) => {
    this.setState({
      translations: [...this.state.translations, newTranslation],
    });
  };

  handleNewQuizzes = (newQuiz) => {
    this.setState({
      quizzes: [...this.state.quizzes, newQuiz],
    });
  };

  handleNewQuizTranslations = (newQT) => {
    this.setState({
      quizTranslations: [...this.state.quizTranslations, newQT],
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} handleLogin={this.handleLogin} />
            )}
          />
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
                translations={this.state.translations}
              />
            )}
          />
          <Route
            path="/quiz"
            render={(props) => (
              <QuizPage
                {...props}
                translations={this.state.translations}
                handleNewQuizzes={this.handleNewQuizzes}
                handleNewQuizTranslations={this.handleNewQuizTranslations}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Login {...props} handleLogin={this.handleLogin} />
            )}
          />
          <Route component={WrongLink} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
