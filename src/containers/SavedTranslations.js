import React from "react";
import TranslationCard from "../components/TranslationCard";
import { Grid, Row, Col } from "../styled";

class SavedTranslations extends React.Component {
  state = {
    filter: "",
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
        <div> SavedTranslations </div>
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
