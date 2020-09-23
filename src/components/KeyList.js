import React from "react";
import { KeysLi } from "../styled";

class KeyList extends React.Component {
  state = {
    click: false,
  };

  handleClick = () => {
    if (!this.state.click && this.props.clickedKey === "") {
      this.props.setClickedKey(this.props.input.id);
      this.setState({ click: true });
    } else if (!this.state.click && this.props.matchCheck) {
      this.props.clearClicksCorrect(this.props.input.id);
      this.setState({ click: true });
    } else if (
      !this.state.click &&
      !this.props.matchCheck &&
      this.props.clickedKey !== "" &&
      this.props.clickedValue !== ""
    ) {
      this.props.clearClicksWrong(this.props.input.id);
      this.setState({ click: true });
    }
  };

  colorSelectedKey = () => {
    if (this.props.wrongArray.some((id) => id === this.props.input.id)) {
      return "#fd7f7e";
    } else if (
      this.props.clickedKey === this.props.input.id &&
      !this.props.matchCheck
    ) {
      return "#1e79b6";
    } else if (
      this.props.clickedKey === this.props.input.id &&
      this.props.matchCheck
    ) {
      return "#1eb65b";
    } else if (
      this.props.correctArray.some((id) => id === this.props.input.id)
    ) {
      return "#1eb65b";
    } else if (this.props.wrongArray.some((id) => id === this.props.input.id)) {
      return "#fd7f7e";
    }
  };

  render() {
    console.log(this.props.input.id, this.state);
    return (
      <KeysLi
        style={{ background: this.colorSelectedKey() }}
        onClick={this.handleClick}
      >
        <div>{this.props.input.input}</div>
      </KeysLi>
    );
  }
}

export default KeyList;
