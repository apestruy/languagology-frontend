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

  handleClick = () => {
    this.setState({ quizDone: true });
  };

  render() {
    // console.log(this.state.seconds);
    console.log(this.props.quizComplete);
    return (
      <div>
        <div>Time Remaining: {this.state.seconds} </div>
        <button onClick={this.handleClick}>Done</button>
      </div>
    );
  }
}

export default Timer;
