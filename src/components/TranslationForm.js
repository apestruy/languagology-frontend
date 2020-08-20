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
          q: ["Hello world", "My name is Jeff"],
          target: "de",
        }),
      }
    )
      .then((resp) => resp.json())
      .then((translation) => console.log(translation));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  saveTranslation = () => {
    console.log("saved!");
  };

  render() {
    console.log(this.state);
    console.log(this.props.state);
    console.log(this.props.state.languages);
    return (
      <div>
        <Translateh2>Translate and Save Your Translations Here 😊</Translateh2>
        <div>
          <form onChange={this.handleChange} onSubmit={this.fetchApi}>
            <SelectDiv>
              <Select name="chosenLanguage">
                <option value="">Select Language:</option>
                {this.props.state.languages.map((language) => {
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
              maxLength="75"
              placeholder="Translate Text Here"
            />
            <TextArea name="output" disabled={true} />
            <TranslateButton type="submit">Translate</TranslateButton>
          </form>
        </div>
        <SaveButton onClick={this.saveTranslation}>Save Translation</SaveButton>
      </div>
    );
  }
}

export default TranslationForm;
