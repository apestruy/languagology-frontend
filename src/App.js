import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";

class App extends React.Component {
  state = {
    userId: null,
  };

  setUser = (userId) => {
    this.setState({ userId: userId });
  };

  clearUser = () => {
    this.setState({ userId: null });
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <NavBar userId={this.state.userId} clearUser={this.clearUser} />
        <MainContainer setUser={this.setUser} appUserId={this.state.userId} />
      </div>
    );
  }
}

export default App;
