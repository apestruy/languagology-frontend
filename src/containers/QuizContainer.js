import React from "react";
import KeyList from "../components/KeyList";
import ValueList from "../components/ValueList";
import Score from "../components/Score";

class QuizContainer extends React.Component {
  state = {
    seconds: 30,
  };

  componentDidMount() {
    this.countDown = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
      }
      if (seconds === 0) {
        clearInterval(this.countDown);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <div>Time Remaining: {this.state.seconds} </div>
        <Score score={this.props.score} />
        <KeyList />
        <ValueList />
      </div>
    );
  }
}

export default QuizContainer;
