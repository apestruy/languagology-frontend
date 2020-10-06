import styled from "styled-components";

export const TextArea = styled.textarea`
  border-radius: 5px;
  margin: 1rem;
  font-size: 1.6em;
  width: 26em;
  height: 9em;
  border: 1px solid black;
  color: black;
  background: #fff5ec;
`;

export const WrongLinkImg = styled.img`
  width: 44%;
  object-fit: contain;
`;

export const ImgDiv = styled.div`
  position: relative;
  top: 30px;
`;

export const SelectDiv = styled.div`
  style: width:200px;
  position: relative;
`;

export const Select = styled.select`
  border-radius: 8px;
  margin: 1rem;
  width: 11em;
  height: 2.5em;
  font-size: 19px;
  padding-left: 9px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.3);

  // color: #00003d;
`;

export const FilterDiv = styled.div`
  position: relative;
  top: 35px;
`;

export const FilterText = styled.div`
  position: relative;
  display: inline-block;
  right: 8px;
  font-size: 19px;
  font-weight: 550;
`;

export const FilterSelect = styled.select`
  display: inline-block;
  border-radius: 5px;
  width: 9em;
  height: 2em;
  font-size: 19px;
  font-weight: 550;
  padding-left: 7px;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.5);
`;

export const TranslateButton = styled.button`
  position: fixed;
  border-radius: 25px;
  top: 44%;
  right: 6.6%;
  width: 7em;
  height: 2.6em;
  font-size: 19px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.3);
`;

export const SaveButton = styled.button`
  border-radius: 25px;
  width: 9.5em;
  height: 2.6em;
  font-size: 19px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.3);
`;

export const ClearButton = styled.button`
  border-radius: 5px;
  margin: 1rem;
  padding-left: 5px;
  width: 9em;
  height: 2.1em;
  font-size: 17px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.3);
`;

export const BeginQuizButton = styled.button`
  border-radius: 9px;
  margin: 1rem;
  padding-left: 5px;
  width: 7em;
  height: 2em;
  font-size: 18px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.4);
`;

export const DoneQuizButton = styled.button`
  position: fixed;
  bottom: 3%;
  right: 44.8%;
  border-radius: 9px;
  margin: 1rem;
  padding-left: 5px;
  width: 6em;
  height: 2em;
  font-size: 21px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.4);
`;

export const Translateh2 = styled.h2`
  font-family: "Helvetica";
  font-size: 35px;
  color: white;
`;

export const AppNameH1 = styled.h1`
  color: white;
  font-size: 68px;
  padding-left: 26px;
  position: relative;
  top: -15px;
  // font-family: "Montserrat";
`;

export const NavButton = styled.button`
  font-size: 1.3em;
  margin: 2em;
  width: 7em;
  height: 2em;
  border-radius: 9px;
  position: relative;
  top: 21px;
  font-family: "sans-serif";
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid white;
`;

export const ProfTranslationsDiv = styled.div`
  position: fixed;
  border-radius: 15px;
  left: 100px;
  top: 150px;
  width: 44em;
  height: 47em;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid white;
`;

export const ProfQuizDiv = styled.div`
  position: fixed;
  border-radius: 15px;
  left: 874px;
  top: 150px;
  width: 44em;
  height: 47em;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid white;
`;

export const TranslationText = styled.p`
  font-size: 17px;
  font-weight: 550;
  text-align: left;
  position: relative;
  padding-left: 12px;
  padding-right: 2px;
`;

export const InputDiv = styled.div`
  position: absolute;
  left: 20px;
  width: 15em;
  border-radius: 5px;
  background: white;
`;

export const OutputDiv = styled.div`
  position: relative;
  display: inline-block;
  left: 250px;
  width: 15em;
  border-radius: 5px;
  background: white;
  color: #a10310;
`;

export const LanguageDiv = styled.div`
  position: relative;
  display: inline-block;
  left: 250px;
  width: 10em;
  font-size: 17px;
  font-weight: 650;
`;

export const ProfileTitle = styled.div`
  position: relative;
  top: 21px;
  font-size: 26px;
  font-weight: 650;
`;

export const GridSavedTranslations = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  justify-content: center;
  margin: 1rem;
  padding: 5px;
`;

export const GridQuizResults = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const ResultsInputDiv = styled.div`
  position: absolute;
  left: 60px;
  width: 19em;
  border-radius: 5px;
  text-align: left;
  box-sizing: border-box;
  padding-left: 21px;
  padding-right: 23px;
  padding-top: 1px;
  padding-bottom: 1px;
  // border: 1.5px solid black;
`;

export const ResultsOutputDiv = styled.div`
  position: relative;
  display: inline-block;
  left: 309px;
  width: 18em;
  border-radius: 5px;
  text-align: left;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 5px;
  padding-top: 1px;
  padding-bottom: 1px;
  // border: 1.5px solid black;
`;

export const ScoreDiv = styled.div`
  position: relative;
  right: 260px;
`;

export const InstructionDiv = styled.div`
  position: absolute;
  display: inline;
  color: #a10310;
`;

export const Ol = styled.ol`
  font-weight: 550;
  font-size: 17px;
`;

export const Li = styled.li`
  background: white;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 12px;
  width: 93%;
  border-radius: 10px;
`;

export const ResultsDiv = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Ul = styled.ul`
  font-weight: 550;
  font-size: 17px;
  list-style-type: none;
`;

export const KeysLi = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 14px;
  height: 1.7em;
  width: 25em;
  border-radius: 10px;
  background-color: white;
`;

export const ValuesLi = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 14px;
  height: 1.7em;
  width: 25em;
  border-radius: 10px;
  background-color: white;
`;

export const KeysDiv = styled.div`
  position: absolute;
  text-align: left;
  left: 100px;
`;

export const ValuesDiv = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
  left: 300px;
`;

export const QuizDiv = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  position: fixed;
  left: 10%;
  right: 10%;
`;

export const TimeDiv = styled.div`
  position: relative;
  top: 15px;
  font-size: 20px;
  font-weight: 650;
  color: white;
`;

export const ScoreTextDiv = styled.div`
  position: relative;
  top: 21px;
  font-size: 20px;
  font-weight: 650;
  color: white;
`;

export const QuizInstructionsDiv = styled.div`
  width: 32em;
  font-size: 27px;
  font-weight: 650;
  position: relative;
  left: 24%;
  color: #a10310;
  top: 15px;
  padding: 5px;
  border-radius: 15px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.3);
`;

export const SignUpDiv = styled.div`
  padding: 60px;
`;

export const SignUpForm = styled.form`
  margin: 0 auto;
  width: 320px;
`;

export const LabelDiv = styled.div`
  display: block;
  color: white;
  font-size: 26px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 21px;
  border-radius: 10px;
  border: 1.5px solid white;
  background: rgba(255, 255, 255, 0.3);
  width: 300px;
  margin: 3px;
`;

export const SignUpLink = styled.div`
  color: white;
  font-size: 24px;
  margin-top: 15px;
`;

export const ErrorMessage = styled.div`
  color: #a10310;
  font-size: 24px;
  font-weight: 550;
`;
