import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
    </div>
  );
}

export default App;
