import React from "react";
import { key } from "../constant";
import { TextArea } from "../styled";

class TranslationForm extends React.Component {
  state = {
    input: "",
    output: "",
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
    return (
      <div>
        <h2> Translate Here:</h2>
        <div>
          <form onChange={this.handleChange} onSubmit={this.fetchApi}>
            <TextArea
              name="input"
              maxLength="75"
              placeholder="Translate Text Here"
            />
            <TextArea name="output" disabled={true} />
            <button type="submit">Translate</button>
          </form>
        </div>
        <button onClick={this.saveTranslation}>Save Translation</button>
      </div>
    );
  }
}

export default TranslationForm;
