
import './App.css';
import React, { Component } from "react";

import Header from "./components/Header";
import GeneralForm from "./components/GeneralForm";
import Education from "./components/Education";
import Work from "./components/Work";


class App extends Component {
  constructor() {
    super();    
  }

  render() {   

    return (  
      <div className="appContainer">
        <Header />   
        <GeneralForm />
        <div className="contentSection">
          <Education />
          <Work />
        </div>
        
      </div>
      
     
    );
  }
}

export default App;

