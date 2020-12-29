import React, { useState} from "react";
import GeneralInfo from "./GeneralInfo";

const GeneralForm = () => {
    
    const [generalInfo, setGeneralInfo] = useState({
                                        name: "", 
                                        surname : "", 
                                        phone :"", 
                                        email : ""}); 
            
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;   

        setGeneralInfo({...generalInfo, [name]: value})
    }

    const handleSubmit = (event) =>  { 
        event.preventDefault()        
        setFormSubmitted(true);
        
        console.log(generalInfo);
    } 

    const handleEdit = (event) =>  {
        setFormSubmitted(false);
    } 
    
    const { name, surname, phone, email} = generalInfo;

    return (
        <div className="generalSection">
            <h2 className="generalFormHeader">General information</h2>
            {!formSubmitted ? (
                <div className="formDiv"> 
                    <form id="generalForm" onSubmit={handleSubmit}>                        
                        <input type="text" name="name" value={name} onChange={handleChange} id="nameInput" className="formInput" placeholder="Enter your name" required></input>
                        <input type="text" name="surname" value={surname} onChange={handleChange} id="surnameInput" className="formInput" placeholder="Enter your surname" required></input>
                        <input type="text" name="phone" value={phone} onChange={handleChange} id="phoneInput" className="formInput" placeholder="Enter your phone number" required></input>
                        <input type="text" name="email" value={email} onChange={handleChange} id="emailInput" className="formInput" placeholder="Enter your e-mail" required></input>
                        <div className="buttonDiv">
                        <input type="submit" value="Submit" />
                        </div>
                    </form>
            </div>                
            ) : (
                <div className="generalInfoContainer">
                    <GeneralInfo info={generalInfo} />
                        <div className="buttonDiv">
                        <button type="button" onClick={handleEdit} >Edit</button>
                    </div> 
                </div>
            )}    
        </div>
    )
    
}

export default GeneralForm;