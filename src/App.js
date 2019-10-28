import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes"

class App extends Component {
  constructor (props) {
    super(props);
    this.handleButtonClick=this.handleButtonClick.bind(this);
    this.state={ working:true };
  }
  
  handleButtonClick () {
    this.setState((state) => {
      return {working: !state.working};
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo" : "App-logo-transformed"} alt="React Logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleButtonClick}>Change State</button>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;