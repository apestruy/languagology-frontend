import React from "react";
import { ValuesLi } from "../styled";

class ValueList extends React.Component {
  state = {
    click: false,
  };

  handleClick = () => {
    if (!this.state.click && this.props.clickedValue === "") {
      this.props.setClickedValue(this.props.output.id);
      this.setState({ click: true });
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
    }
  };

  render() {
    console.log(this.props.output.id, this.state);
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
