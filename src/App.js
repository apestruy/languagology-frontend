import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfileContainer from "./containers/ProfileContainer";
import TranslationForm from "./components/TranslationForm";
import QuizContainer from "./containers/QuizContainer";
import WrongLink from "./components/WrongLink";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/translate" component={TranslationForm} />
        <Route path="/quiz" component={QuizContainer} />
        <Route path="/" component={WrongLink} />
        {/* <MainContainer /> */}
      </Switch>
    </div>
  );
}

export default App;
