import styled from "styled-components";

export const TextArea = styled.textarea`
  border-radius: 5px;
  margin: 1rem;
  font-size: 1.5em;
  width: 25em;
  height: 7em;
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
  border-radius: 5px;
  margin: 1rem;
  width: 11em;
  height: 2.5em;
  font-size: 16px;
  font-weight: 550;
  padding-left: 5px;
  //   color: white;
  background: #97caef;
  border: 1px solid black;
`;

export const TranslateButton = styled.button`
  position: fixed;
  border-radius: 25px;
  top: 332px;
  right: 170px;
  width: 8em;
  height: 3em;
  font-size: 17px;
  font-weight: 550;
  background: #cafafe;
  color: #a10310;
  border: 2px solid black;
`;

export const SaveButton = styled.button`
  border-radius: 25px;
  right: 750px;
  width: 11em;
  height: 2.5em;
  font-size: 17px;
  font-weight: 550;
  background: #cafafe;
  color: #a10310;
  border: 2px solid black;
`;

export const ClearButton = styled.button`
  border-radius: 5px;
  margin: 1rem;
  width: 10em;
  height: 2em;
  font-size: 14px;
  font-weight: 550;
  padding-left: 5px;
  background: #97caef;
  border: 1px solid black;
`;

export const Translateh2 = styled.h2`
  font-family: "Helvetica";
  font-size: 21px;
  //   color: #333333;
`;

export const AppNameH1 = styled.h1`
  color: #b40304;
  font-size: 55px;
  font-family: "sans-serif";
`;

export const NavButton = styled.button`
  font-size: 1.1em;
  margin: 2em;
  width: 7em;
  height: 2em;
  border: 2px solid #a10303;
  border-radius: 9px;
  background-color: #8fd3db;
  position: relative;
  top: 26px;
  font-family: "sans-serif";
`;

export const ProfTranslationsDiv = styled.div`
  position: fixed;
  border: 1px solid black;
  left: 100px;
  width: 44em;
  height: 48em;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ProfQuizDiv = styled.div`
  position: fixed;
  border: 1px solid black;
  left: 874px;
  width: 44em;
  height: 48em;
`;

export const TranslationText = styled.p`
  font-size: 16px;
  font-weight: 550;
  text-align: left;
  position: relative;
  left: 3px;
`;

export const InputDiv = styled.div`
  position: absolute;
  left: 20px;
  border: 2px solid black;
  width: 15em;
  border-radius: 5px;
  background: #cafafe;
  //   color: #550000;
  //   color: #173f5f;
`;

export const OutputDiv = styled.div`
  position: relative;
  display: inline-block;
  left: 250px;
  border: 2px solid black;
  width: 15em;
  border-radius: 5px;
  background: #cafafe;
  color: #a10310;
`;

export const LanguageDiv = styled.div`
  position: relative;
  display: inline-block;
  left: 250px;
  //   border: 1px solid black;
  width: 10em;
  font-size: 16px;
  font-weight: 650;
`;

export const Grid = styled.div`
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
  //   flex: 25;
  //   position: center;
`;
