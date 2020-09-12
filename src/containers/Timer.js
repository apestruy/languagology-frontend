import React from "react";

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
      }
      if (quizDone === true) {
        clearInterval(this.countDown);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  handleClick = () => {
    this.setState({ quizDone: true });
  };

  render() {
    return (
      <div>
        <div>Time Remaining: {this.state.seconds} </div>
        <button onClick={this.handleClick}>Done</button>
      </div>
    );
  }
}

export default Timer;
