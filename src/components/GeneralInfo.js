
import React from "react";

const GeneralInfo = (props) => {    
    
        const {name, surname, phone, email} = props.info;
        return (            
            <div className="generalInfoDiv">
                <div className="generalInfo" id="nameLabel">Name:</div>
                <div className="generalInfo" id="nameData">{name}</div>
                <div className="generalInfo" id="surnameLabel">Surname:</div>
                <div className="generalInfo" id="surnameData">{surname}</div>
                <div className="generalInfo" id="phoneLabel">Phone:</div>
                <div className="generalInfo" id="phoneData">{phone}</div>
                <div className="generalInfo" id="emailLabel">E-mail:</div>
                <div className="generalInfo" id="emailData">{email}</div>
            </div>              
          
        )   

}

export default GeneralInfo;