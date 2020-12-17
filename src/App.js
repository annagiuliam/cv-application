
import './App.css';
import React, { Component } from "react";

import Header from "./components/Header";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm"


class App extends Component {
  constructor() {
    super();    
  }

  render() {   

    return (  
      <div className="appContainer">
        <Header />   
        <GeneralForm />
        <EducationForm />
      </div>
      
     
    );
  }
}

export default App;

