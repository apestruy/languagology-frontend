import React from "react";
import { ResultsInputDiv, ResultsOutputDiv, ResultsDiv } from "../styled";

class ResultCardTranslations extends React.Component {
  state = {
    showLanguage: false,
  };

  handleClick = () => {
    this.setState({ showLanguage: !this.state.showLanguage });
  };

  render() {
    const backgroundColor =
      this.props.translation.correct === "yes" ? "#85e085" : "#ff7676";

    const languageObj = this.props.translations.find(
      (translation) => translation.id === this.props.translation.translation.id
    );

    const language = languageObj.language.language.toUpperCase();

    return (
      <ResultsDiv>
        <ResultsInputDiv style={{ background: backgroundColor }}>
          {this.props.translation.translation.input}
        </ResultsInputDiv>
        <ResultsOutputDiv
          style={{ background: backgroundColor }}
          onClick={this.handleClick}
        >
          {this.state.showLanguage
            ? language
            : this.props.translation.translation.output}
        </ResultsOutputDiv>
      </ResultsDiv>
    );
  }
}

export default ResultCardTranslations;
