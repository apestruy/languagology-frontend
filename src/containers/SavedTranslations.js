import React from "react";
import TranslationCard from "../components/TranslationCard";
import FilterBar from "../components/FilterBar";
import {
  GridSavedTranslations,
  Row,
  Col,
  ProfileTitle,
  ProfileInstructions,
} from "../styled";

class SavedTranslations extends React.Component {
  state = {
    filter: "all",
  };

  handleChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  filterTranslations = () => {
    let filter = this.state.filter;
    let quizTranslations = this.props.translations;
    if (filter === "all") {
      return quizTranslations;
    } else {
      quizTranslations = quizTranslations.filter(
        (translation) => translation.language.language === filter
      );
      return quizTranslations;
    }
  };

  renderTranslations = () => {
    return this.filterTranslations().map((translation) => {
      return <TranslationCard translation={translation} key={translation.id} />;
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

  render() {
    return (
      <div>
        {this.renderTranslations().length === 1 ? (
          <ProfileTitle>
            {this.renderTranslations().length} Saved Translation
          </ProfileTitle>
        ) : this.renderTranslations().length === 0 ? (
          <ProfileTitle>No Saved Translations Yet</ProfileTitle>
        ) : (
          <ProfileTitle>
            {this.renderTranslations().length} Saved Translations
          </ProfileTitle>
        )}
        {this.renderTranslations().length === 0 ? (
          <ProfileInstructions>
            Please save translations on the Translate Page
          </ProfileInstructions>
        ) : (
          <div>
            <FilterBar
              languages={this.filterByLanguage()}
              filter={this.state.filter}
              handleChange={this.handleChange}
            />
            <GridSavedTranslations>
              <Row>
                <Col>{this.renderTranslations()}</Col>
              </Row>
            </GridSavedTranslations>
          </div>
        )}
      </div>
    );
  }
}

export default SavedTranslations;
