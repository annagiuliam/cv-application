
import './App.css';
import React, { Component } from "react";

import Header from "./components/Header";
import GeneralForm from "./components/GeneralForm";
import Education from "./components/Education"


class App extends Component {
  constructor() {
    super();    
  }

  render() {   

    return (  
      <div className="appContainer">
        <Header />   
        <GeneralForm />
        <Education />
      </div>
      
     
    );
  }
}

export default App;

