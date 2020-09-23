import React from "react";
import Timer from "./Timer";
import { FilterSelect, Ul, KeysDiv, ValuesDiv } from "../styled";
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
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.clickedValue !== this.state.clickedValue &&
      this.matchCheck()
    ) {
      this.updateScore(1);
    } else if (
      prevState.clickedValue !== this.state.clickedValue &&
      this.state.clickedValue !== "" &&
      !this.matchCheck()
    ) {
      this.setClicksWrong();
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
    // correctArray.push(this.state.clickedValue);
    this.setState({
      correctArray: correctArray,
      clickedKey: key,
      clickedValue: "",
    });
  };

  setClicksWrong = () => {
    const wrongArray = [...this.state.wrongArray];
    wrongArray.push(this.state.clickedKey);
    const valuesToUnclick = [...this.state.valuesToUnclick];
    valuesToUnclick.push(this.state.clickedValue);
    this.setState({ wrongArray: wrongArray, valuesToUnclick: valuesToUnclick });
  };

  clearClicksWrong = (key) => {
    this.setState({ clickedKey: key, clickedValue: "" });
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
            <button onClick={this.beginQuiz}>Begin Quiz</button>
          )}
        </div>
      );
    } else if (
      this.filterTranslations().length < 5 &&
      this.state.quizLanguage === "mixed"
    ) {
      return (
        <h2 style={{ color: "#74131d" }}>
          There must be at least 5 translations per quiz. Please save{" "}
          {5 - this.filterTranslations().length} translation&#x28;s&#x29; on the
          Translate Page
        </h2>
      );
    } else {
      return (
        <h2 style={{ color: "#74131d" }}>
          There must be at least 5 translations per language for each quiz.
          Please save {5 - this.filterTranslations().length} more
          translation&#x28;s&#x29; in {this.state.quizLanguage}.
        </h2>
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
          />
        </li>
      );
    });
    return <Ul>{listItems}</Ul>;
  };

  render() {
    console.log("CORRECT:", this.state.correctArray);
    console.log("WRONG:", this.state.wrongArray);
    // console.log(this.state.clickedKey);
    // console.log(this.state.clickedValue);
    return (
      <div>
        <h2> Get Quizzed On Your Translations </h2>
        {!this.state.start && (
          <div>
            <h3>Must have a minimum of 5 translations saved</h3>
            <h3>Pick the language you would like to be quizzed in</h3>
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
          <div>
            <Timer />
            <Score score={this.state.score} />
            <KeysDiv>{this.renderKeys()}</KeysDiv>
            <ValuesDiv>{this.renderValues()}</ValuesDiv>
          </div>
        )}
      </div>
    );
  }
}

export default QuizPage;
