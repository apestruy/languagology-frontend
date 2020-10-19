import React from "react";
import { Redirect } from "react-router-dom";
import Timer from "./Timer";
import {
  FilterSelect,
  Ul,
  KeysDiv,
  ValuesDiv,
  QuizDiv,
  Translateh2,
  BeginQuizButton,
  DoneQuizButton,
  QuizInstructionsDiv,
} from "../styled";
import Score from "../components/Score";
import KeyList from "../components/KeyList";
import ValueList from "../components/ValueList";

class QuizPage extends React.Component {
  state = {
    start: false,
    quizLanguage: "mixed",
    score: 0,
    randomKeys: [],
    randomValues: [],
    clickedKey: "",
    clickedValue: "",
    correctArray: [],
    wrongArray: [],
    valuesToUnclick: [],
    finalCorrectArray: [],
    timesUp: false,
    quizComplete: false,
    redirect: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.clickedValue !== this.state.clickedValue &&
      this.matchCheck()
    ) {
      this.updateScore(1);
      this.setFinalCorrectArray();
    } else if (
      prevState.clickedValue !== this.state.clickedValue &&
      this.state.clickedValue !== "" &&
      !this.matchCheck()
    ) {
      this.setClicksWrong();
    } else if (
      this.state.finalCorrectArray.length + this.state.wrongArray.length ===
        5 &&
      !this.state.quizComplete
    ) {
      this.setState({ quizComplete: true });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      start: false,
    });
  };

  updateScore = (point) => {
    let updatedScore = this.state.score + point;
    this.setState({
      score: updatedScore,
    });
  };

  setClickedKey = (key) => {
    if (this.state.clickedKey === "") {
      this.setState({ clickedKey: key });
    }
  };

  setClickedValue = (value) => {
    if (this.state.clickedValue === "") {
      this.setState({ clickedValue: value });
    }
  };

  clearClicksCorrect = (key) => {
    const correctArray = [...this.state.correctArray];
    correctArray.push(this.state.clickedKey);
    this.setState({
      correctArray: correctArray,
      clickedKey: key,
      clickedValue: "",
    });
  };

  clearClicksWrong = (key) => {
    this.setState({ clickedKey: key, clickedValue: "" });
  };

  setClicksWrong = () => {
    const wrongArray = [...this.state.wrongArray];
    wrongArray.push(this.state.clickedKey);
    const valuesToUnclick = [...this.state.valuesToUnclick];
    valuesToUnclick.push(this.state.clickedValue);
    this.setState({ wrongArray: wrongArray, valuesToUnclick: valuesToUnclick });
  };

  setFinalCorrectArray = () => {
    const correctArray = [...this.state.finalCorrectArray];
    correctArray.push(this.state.clickedKey);
    this.setState({ finalCorrectArray: correctArray });
  };

  filterByLanguage = () => {
    let translations = this.props.translations;
    let languages = translations.map(
      (translation) => translation.language.language
    );
    let reducedLanguages = this.removeDuplicates(languages);
    return reducedLanguages;
  };

  removeDuplicates = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
  };

  filterTranslations = () => {
    let language = this.state.quizLanguage;
    let quizTranslations = this.props.translations;
    if (language === "mixed") {
      return quizTranslations;
    } else {
      quizTranslations = quizTranslations.filter(
        (translation) => translation.language.language === language
      );
      return quizTranslations;
    }
  };

  renderQuiz = () => {
    if (this.filterTranslations().length > 4) {
      return (
        <div>
          {!this.state.start && (
            <BeginQuizButton onClick={this.beginQuiz}>
              Begin Quiz
            </BeginQuizButton>
          )}
        </div>
      );
    } else if (
      this.filterTranslations().length < 5 &&
      this.state.quizLanguage === "mixed"
    ) {
      return (
        <QuizInstructionsDiv>
          There must be at least 5 translations per quiz. Please save at least{" "}
          {5 - this.filterTranslations().length} translation&#x28;s&#x29; on the
          Translate Page.
        </QuizInstructionsDiv>
      );
    } else {
      return (
        <QuizInstructionsDiv>
          There must be at least 5 translations per language for each quiz.
          Please save {5 - this.filterTranslations().length} more
          translation&#x28;s&#x29; in {this.state.quizLanguage}.
        </QuizInstructionsDiv>
      );
    }
  };

  beginQuiz = () => {
    const translations = this.filterTranslations();
    let randomized = translations.sort(() => Math.random() - 0.5);
    let randomFiveTranslations = [];
    for (let i = 0; i < 5; i++) {
      randomFiveTranslations.push(randomized[i]);
    }
    const keys = [...randomFiveTranslations];
    const values = [...randomFiveTranslations];
    let randomKeys = keys.sort(() => Math.random() - 0.5);
    let randomValues = values.sort(() => Math.random() - 0.5);
    this.setState({
      randomKeys: randomKeys,
      randomValues: randomValues,
      start: true,
    });
  };

  matchCheck = () => {
    if (
      this.state.clickedKey === this.state.clickedValue &&
      this.state.clickedKey !== ""
    ) {
      return true;
    }
  };

  timesUp = () => {
    this.setState({ timesUp: true });
  };

  redirectPage = () => {
    this.setState({ redirect: "/profile" });
  };

  handleClick = () => {
    const keys = this.state.randomKeys;
    const allIDs = keys.map((key) => key.id);
    const correctIDs = this.state.finalCorrectArray;
    const wrongIDs = allIDs.filter((x) => correctIDs.indexOf(x) === -1);

    fetch("http://localhost:3000/api/v1/quizzes", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: this.state.score,
        user_id: parseInt(sessionStorage.userId),
      }),
    })
      .then((resp) => resp.json())
      .then((newQuiz) => {
        this.props.handleNewQuizzes(newQuiz);

        correctIDs.map((id) => {
          return fetch("http://localhost:3000/api/v1/quiz_translations", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${sessionStorage.jwt}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quiz_id: newQuiz.id,
              translation_id: id,
              correct: "yes",
            }),
          })
            .then((resp) => resp.json())
            .then((newQT) => {
              this.props.handleNewQuizTranslations(newQT);
            });
        });
        wrongIDs.map((id) => {
          return fetch("http://localhost:3000/api/v1/quiz_translations", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${sessionStorage.jwt}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quiz_id: newQuiz.id,
              translation_id: id,
              correct: "no",
            }),
          })
            .then((resp) => resp.json())
            .then((newQT2) => {
              this.props.handleNewQuizTranslations(newQT2);
            });
        });
      })
      .finally(() => this.redirectPage());
  };

  renderKeys = () => {
    let keysToRender = this.state.randomKeys;
    let listItems = keysToRender.map((input) => {
      return (
        <li key={input.id}>
          <KeyList
            input={input}
            setClickedKey={this.setClickedKey}
            clickedKey={this.state.clickedKey}
            clickedValue={this.state.clickedValue}
            matchCheck={this.matchCheck()}
            clearClicksCorrect={this.clearClicksCorrect}
            clearClicksWrong={this.clearClicksWrong}
            correctArray={this.state.correctArray}
            wrongArray={this.state.wrongArray}
            timesUp={this.state.timesUp}
          />
        </li>
      );
    });
    return <Ul>{listItems}</Ul>;
  };

  renderValues = () => {
    let valuesToRender = this.state.randomValues;
    let listItems = valuesToRender.map((output) => {
      return (
        <li key={output.id}>
          <ValueList
            output={output}
            setClickedValue={this.setClickedValue}
            clickedValue={this.state.clickedValue}
            matchCheck={this.matchCheck()}
            correctArray={this.state.correctArray}
            valuesToUnclick={this.state.valuesToUnclick}
            wrongArray={this.state.wrongArray}
            timesUp={this.state.timesUp}
          />
        </li>
      );
    });
    return <Ul>{listItems}</Ul>;
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <Translateh2> Get Quizzed On Your Translations </Translateh2>
        {!this.state.start && (
          <div>
            <h1 style={{ color: "white" }}>
              Must have a minimum of 5 translations saved
            </h1>
            <h1 style={{ color: "white" }}>
              Pick the language you would like to be quizzed in
            </h1>
            <FilterSelect
              name="quizLanguage"
              value={this.state.quizLanguage}
              onChange={this.handleChange}
            >
              <option value="mixed">Mix Them Up</option>
              {this.filterByLanguage().map((language) => {
                return (
                  <option key={language} value={language}>
                    {language}
                  </option>
                );
              })}
            </FilterSelect>
          </div>
        )}
        {this.renderQuiz()}
        {this.state.start && (
          <QuizDiv>
            <Timer
              timesUp={this.timesUp}
              quizComplete={this.state.quizComplete}
            />
            <Score score={this.state.score} />
            <KeysDiv>{this.renderKeys()}</KeysDiv>
            <ValuesDiv>{this.renderValues()}</ValuesDiv>
          </QuizDiv>
        )}
        {this.state.timesUp && (
          <DoneQuizButton onClick={this.handleClick}>Done</DoneQuizButton>
        )}
      </div>
    );
  }
}

export default QuizPage;
