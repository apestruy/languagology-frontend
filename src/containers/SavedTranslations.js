import React from "react";
import TranslationCard from "../components/TranslationCard";
import FilterBar from "../components/FilterBar";
import { Grid, Row, Col, SavedTranslationsTitle } from "../styled";

class SavedTranslations extends React.Component {
  state = {
    filter: "all",
  };

  renderTranslations = () => {
    let translationsToRender = this.props.translations;
    return translationsToRender.map((translation) => {
      return (
        <TranslationCard
          translation={translation}
          key={translation.id}
          languages={this.props.languages}
        />
      );
    });
  };

  render() {
    console.log(this.props.translations);
    return (
      <div>
        <SavedTranslationsTitle>Saved Translations</SavedTranslationsTitle>
        <FilterBar translations={this.props.translations} />
        <Grid>
          <Row>
            <Col>{this.renderTranslations()}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SavedTranslations;
