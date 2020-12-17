
import React from "react";

const GeneralInfo = (props) => {    
    
        const {name, surname, phone, email} = props.info;
        return (            
            <div className="generalInfoDiv">
                <div className="generalInfo" id="name">Name: {name}</div>
                <div className="generalInfo" id="surname">Surname: {surname}</div>
                <div className="generalInfo" id="phone">Phone Number: {phone}</div>
                <div className="generalInfo" id="email">E-mail: {email}</div>
            </div>              
          
        )   

}

export default GeneralInfo;