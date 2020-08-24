import React from "react";
import {
  InputDiv,
  OutputDiv,
  Col,
  LanguageDiv,
  TranslationText,
} from "../styled";

const TranslationCard = (props) => {
  return (
    <div>
      <Col>
        <InputDiv>
          <TranslationText>{props.translation.input}</TranslationText>
        </InputDiv>
        <OutputDiv>
          <TranslationText>{props.translation.output}</TranslationText>
        </OutputDiv>
        <LanguageDiv>{props.translation.language.language}</LanguageDiv>
      </Col>
    </div>
  );
};

export default TranslationCard;
