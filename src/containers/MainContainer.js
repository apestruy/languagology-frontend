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
      userId: null,
      // login: false,
      jwt: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userId !== this.state.userId && this.state.userId) {
      // console.log(this.state.userId);
      fetch("http://localhost:3000/api/v1/translations", {
        headers: {
          Authorization: `Bearer ${this.state.jwt}`,
        },
      })
        .then((resp) => resp.json())
        .then((translations) => {
          fetch("http://localhost:3000/api/v1/languages", {
            headers: {
              Authorization: `Bearer ${this.state.jwt}`,
            },
          })
            .then((resp) => resp.json())
            .then((languages) => {
              fetch("http://localhost:3000/api/v1/quizzes", {
                headers: {
                  Authorization: `Bearer ${this.state.jwt}`,
                },
              })
                .then((resp) => resp.json())
                .then((quizzes) => {
                  fetch("http://localhost:3000/api/v1/quiz_translations", {
                    headers: {
                      Authorization: `Bearer ${this.state.jwt}`,
                    },
                  })
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
    if (
      prevProps.appUserId !== this.props.appUserId &&
      this.props.appUserId === null
    ) {
      this.setState({ userId: null });
    }
  }

  handleLogin = (userId, jwt) => {
    this.props.setUser(userId);
    this.setState({ userId: userId, jwt: jwt });
    // this.setState({ userId: userId, jwt: jwt, login: true });
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
    console.log(this.state.userId);
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
                userId={this.state.userId}
                jwt={this.state.jwt}
              />
            )}
          />
          <Route component={WrongLink} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
