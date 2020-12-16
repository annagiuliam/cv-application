import { render } from "@testing-library/react";
import React, { Component} from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {name, surname, phone, email} = props.info;
        return (
            <div className="generalInfoContainer">
                <div className="generalInfoDiv">
                    <div className="generalInfo" id="name">Name: {name}</div>
                    <div className="generalInfo" id="surname">Surname: {surname}</div>
                    <div className="generalInfo" id="phone">Phone Number: {phone}</div>
                    <div className="generalInfo" id="email">E-mail: {email}</div>
                </div>
                <div className="buttonDiv">
                    <button type="button" onClick = {props.handler} >Edit</button>
                </div>
            </div>
            
        )
    }
    
        
        
    
}

export default GeneralInfo;