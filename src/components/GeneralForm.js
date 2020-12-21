import React, { Component} from "react";
import GeneralInfo from "./GeneralInfo";
//import '../App.css';

class GeneralForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            generalInfo : {name: "", surname : "", phone :"", email : ""}, // general Info cannot be an emty object because input is controlled
            formSubmitted : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;   

        this.setState({
            generalInfo: { ...this.state.generalInfo, [name]: value}
        })
    }

    handleSubmit(event) { 
        event.preventDefault()        
        this.setState({formSubmitted: true})
        
        console.log(this.state);
    }

    handleEdit(event) {
        this.setState({formSubmitted : false})
    }


    render() {
        const { name, surname, phone, email} = this.state.generalInfo;

        return (
            <div className="generalSection">
                <h2 className="generalFormHeader">General information</h2>
                {!this.state.formSubmitted ? (
                    <div className="formDiv"> 
                        <form id="generalFOrm" onSubmit={this.handleSubmit}>
                            <input type="text" name="name" value={name} onChange={this.handleChange} id="nameInput" className="formInput" placeholder="Enter your name" required></input>
                            <input type="text" name="surname" value={surname} onChange={this.handleChange} id="surnameInput" className="formInput" placeholder="Enter your surname" required></input>
                            <input type="text" name="phone" value={phone} onChange={this.handleChange} id="phoneInput" className="formInput" placeholder="Enter your phone number" required></input>
                            <input type="text" name="email" value={email} onChange={this.handleChange} id="emailInput" className="formInput" placeholder="Enter your e-mail" required></input>
                            {/* <button type="submit" value="Submit">Submit</button> */}
                            <div className="buttonDiv">
                            <input type="submit" value="Submit" />
                            </div>
                            
                        </form>
                </div>                
                ) : (
                    <div className="generalInfoContainer">
                        <GeneralInfo info={this.state.generalInfo} />
                         <div className="buttonDiv">
                            <button type="button" onClick={this.handleEdit} >Edit</button>
                        </div> 
                    </div>
                
                )}
                    
                
                
            </div>
        )

    }
}

export default GeneralForm;