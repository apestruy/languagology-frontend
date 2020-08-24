import React from "react";
import SavedTranslations from "./SavedTranslations";
import QuizResults from "./QuizResults";
import { ProfTranslationsDiv, ProfQuizDiv } from "../styled";

const ProfileContainer = (props) => {
  return (
    <div>
      <ProfTranslationsDiv>
        <SavedTranslations
          translations={props.translations}
          languages={props.languages}
        />
      </ProfTranslationsDiv>
      <ProfQuizDiv>
        <QuizResults />
      </ProfQuizDiv>
    </div>
  );
};

export default ProfileContainer;
