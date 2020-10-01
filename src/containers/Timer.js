import React from "react";
import { TimeDiv } from "../styled";

class Timer extends React.Component {
  state = {
    seconds: 30,
    quizDone: false,
  };

  componentDidMount() {
    this.countDown = setInterval(() => {
      const { seconds, quizDone } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
      }
      if (seconds === 0) {
        clearInterval(this.countDown);
        this.props.timesUp();
      }
      if (quizDone === true) {
        clearInterval(this.countDown);
        this.props.timesUp();
      }
    }, 1000);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.quizComplete !== prevProps.quizComplete) {
      clearInterval(this.countDown);
      this.props.timesUp();
    }
  };

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  render() {
    return (
      <div>
        <TimeDiv>Time Remaining: {this.state.seconds} </TimeDiv>
      </div>
    );
  }
}

export default Timer;
