
import './App.css';
import React, { Component } from "react";

import GeneralForm from "./components.js/GeneralForm"

class App extends Component {
  constructor() {
    super();    
  }

  render() {   

    return (      
        <GeneralForm />
     
    );
  }
}

export default App;

