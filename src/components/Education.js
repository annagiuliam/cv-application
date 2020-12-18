import React, {Component} from "react";
import EducationInfo from "./EducationInfo";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationList : [],
            educationInfo : {id : uniqid(), startDate : "", endDate : "", school : "", title : ""},
            formSubmitted : false,
            formActive : false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;   

        this.setState({ 
            educationInfo: { ...this.state.educationInfo, [name]: value}
        });
    }

    handleSubmit(event) {   
        event.preventDefault()    
        this.setState({
            formActive : false,
            educationList : this.state.educationList.concat(this.state.educationInfo),
            educationInfo : {startDate : "", endDate : "", school : "", title : ""}
        })
        
      console.log(this.state);
    }   

    renderForm(event) {       
        this.setState({
            formActive : true
        })       
    }        
          
        
    
    render(){      
        const { formActive} = this.state;
        
        return(
            
            <div className="educationSection">
                <h2 className="educationHeader">Education</h2>
                <div>
                    <button onClick={this.renderForm}>Add School</button>
                </div>
                {formActive && <EducationForm 
                info={this.state.educationInfo}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                
                /> }
                
                    {/* <div className="eduItemsContainer">
                        <EducationInfo info={this.state.educationInfo} />
                    </div> */}
                
            </div>
        
        )
            
        
    }
        
    
}

export default Education;