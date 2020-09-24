import React from "react";
import { ValuesLi } from "../styled";

class ValueList extends React.Component {
  state = {
    click: false,
    colored: false,
  };

  handleClick = () => {
    if (
      this.colorSelectedValue() === "#fd7f7e" ||
      (this.colorSelectedValue() === "#1eb65b" && !this.props.timesUp)
    ) {
      this.setState({ colored: true });
    } else if (
      !this.state.click &&
      this.props.clickedValue === "" &&
      !this.props.timesUp
    ) {
      this.props.setClickedValue(this.props.output.id);
      this.setState({ click: true });
    } else if (
      this.state.click &&
      !this.state.colored &&
      this.props.valuesToUnclick.some(
        (id) => id === this.props.output.id && !this.props.timesUp
      )
    ) {
      this.props.setClickedValue(this.props.output.id);
    }
  };

  colorSelectedValue = () => {
    if (
      this.props.clickedValue === this.props.output.id &&
      this.props.matchCheck
    ) {
      return "#1eb65b";
    } else if (
      this.props.correctArray.some((id) => id === this.props.output.id)
    ) {
      return "#1eb65b";
    } else if (
      this.props.wrongArray.some((id) => id === this.props.output.id)
    ) {
      return "#fd7f7e";
    }
  };

  render() {
    console.log(this.props.output.id);
    return (
      <ValuesLi
        style={{ background: this.colorSelectedValue() }}
        onClick={this.handleClick}
      >
        <div> {this.props.output.output} </div>
      </ValuesLi>
    );
  }
}

export default ValueList;
