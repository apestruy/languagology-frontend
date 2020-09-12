import React from "react";
import Timer from "./Timer";
import { FilterSelect } from "../styled";
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
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      start: false,
    });
  };

  updateScore = (score) => {
    this.setState({
      score: score,
    });
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
          {5 - this.filterTranslations().length} translations on the Translate
          Page
        </h2>
      );
    } else {
      return (
        <h2 style={{ color: "#74131d" }}>
          There must be at least 5 translations per language for each quiz.
          Please save {5 - this.filterTranslations().length} more translations
          in {this.state.quizLanguage}.
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

  render() {
    console.log(this.props.translations);
    console.log(this.state);
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
            <KeyList keys={this.state.randomKeys} />
            <ValueList values={this.state.randomValues} />
          </div>
        )}
      </div>
    );
  }
}

export default QuizPage;
