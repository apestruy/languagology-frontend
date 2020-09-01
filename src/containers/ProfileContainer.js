import React from "react";
import SavedTranslations from "./SavedTranslations";
import QuizResults from "./QuizResults";
import { ProfTranslationsDiv, ProfQuizDiv } from "../styled";

const ProfileContainer = (props) => {
  return (
    <div>
      <ProfTranslationsDiv>
        <SavedTranslations translations={props.translations} />
      </ProfTranslationsDiv>
      <ProfQuizDiv>
        <QuizResults
          quizzes={props.quizzes}
          quizTranslations={props.quizTranslations}
        />
      </ProfQuizDiv>
    </div>
  );
};

export default ProfileContainer;
