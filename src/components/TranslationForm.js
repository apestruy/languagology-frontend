import React from "react";
import { key } from "../constant";
import {
  TextArea,
  SelectDiv,
  Select,
  TranslateButton,
  SaveButton,
  Translateh2,
  ClearButton,
} from "../styled";

class TranslationForm extends React.Component {
  state = {
    input: "",
    output: "",
    chosenLanguage: "",
    languageId: "",
    saved: false,
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
      saved: false,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1),
      saved: false,
    });
  };

  saveTranslation = () => {
    fetch("http://localhost:3000/api/v1/translations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: this.state.input,
        output: this.state.output,
        user_id: parseInt(sessionStorage.userId),
        language_id: this.state.languageId,
      }),
    })
      .then((resp) => resp.json())
      .then((newTranslation) => {
        this.props.handleSavedTranslation(newTranslation);
        this.setState({
          saved: true,
        });
      });
  };

  clearTextAreas = () => {
    this.setState({
      input: "",
      output: "",
      chosenLanguage: "",
      languageId: "",
      saved: false,
    });
  };

  render() {
    return (
      <div>
        <Translateh2>
          Translate And Save Your Translations Here{" "}
          <span role="img" aria-label="happy">
            😊
          </span>
        </Translateh2>
        <div>
          <form onSubmit={this.fetchApi}>
            <SelectDiv>
              <Select
                name="chosenLanguage"
                value={this.state.chosenLanguage}
                onChange={this.handleChange}
              >
                <option value="">Select a Language:</option>
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
            <div>
              {this.state.input && this.state.chosenLanguage && (
                <TranslateButton type="submit">Translate</TranslateButton>
              )}
            </div>
          </form>
        </div>
        <div>
          {this.state.output && !this.state.saved && (
            <SaveButton onClick={this.saveTranslation}>
              Save Translation
            </SaveButton>
          )}
        </div>
        <ClearButton onClick={this.clearTextAreas}>
          Clear All Inputs
        </ClearButton>
        <div>{this.state.saved && <h3>Successfully Saved</h3>}</div>
      </div>
    );
  }
}

export default TranslationForm;
