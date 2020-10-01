import React from "react";
import { ScoreTextDiv } from "../styled";

const Score = (props) => {
  return <ScoreTextDiv> Score: {props.score} </ScoreTextDiv>;
};

export default Score;
