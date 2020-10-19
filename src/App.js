import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";

class App extends React.Component {
  state = {
    userId: sessionStorage.userId,
  };

  setUser = (userId) => {
    this.setState({ userId: userId });
  };

  clearUser = () => {
    sessionStorage.clear();
    this.setState({ userId: null });
  };

  render() {
    return (
      <div className="App">
        <NavBar userId={this.state.userId} clearUser={this.clearUser} />
        <MainContainer setUser={this.setUser} />
      </div>
    );
  }
}

export default App;
