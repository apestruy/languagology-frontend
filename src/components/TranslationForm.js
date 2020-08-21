import React from "react";
import { key } from "../constant";
import {
  TextArea,
  SelectDiv,
  Select,
  TranslateButton,
  SaveButton,
  Translateh2,
} from "../styled";

class TranslationForm extends React.Component {
  state = {
    input: "",
    output: "",
    chosenLanguage: "",
    languageId: "",
  };

  fetchApi = (event) => {
    event.preventDefault();
    fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${key}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: `${this.state.input}`,
          source: "en",
          target: `${this.state.chosenLanguage}`,
          format: "text",
        }),
      }
    )
      .then((resp) => resp.json())
      .then((translation) => {
        let targetLanguage = this.props.languages.find(
          (language) => language.language_code === this.state.chosenLanguage
        );
        this.setState({
          output: translation.data.translations[0].translatedText,
          languageId: targetLanguage.id,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1),
    });
  };

  saveTranslation = () => {
    console.log("saved!");
  };

  render() {
    console.log(this.state);
    console.log(this.props.languages);
    return (
      <div>
        <Translateh2>Translate and Save Your Translations Here 😊</Translateh2>
        <div>
          <form onSubmit={this.fetchApi}>
            <SelectDiv>
              <Select
                name="chosenLanguage"
                value={this.state.chosenLanguage}
                onChange={this.handleChange}
              >
                <option value="">Select Language:</option>
                {this.props.languages.map((language) => {
                  return (
                    <option key={language.id} value={language.language_code}>
                      {language.language}
                    </option>
                  );
                })}
              </Select>
            </SelectDiv>
            <TextArea
              name="input"
              value={this.state.input}
              onChange={this.handleInputChange}
              maxLength="75"
              placeholder="Translate Text Here"
            />
            <TextArea
              name="output"
              value={this.state.output}
              onChange={this.handleChange}
              disabled={true}
            />
            <TranslateButton type="submit">Translate</TranslateButton>
          </form>
        </div>
        <SaveButton onClick={this.saveTranslation}>Save Translation</SaveButton>
      </div>
    );
  }
}

export default TranslationForm;
