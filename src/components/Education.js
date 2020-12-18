import React, {Component} from "react";
import EducationInfo from "./EducationInfo";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted : false,
            formActive : false,
            educationList : [],
            //educationInfo : {id : uniqid(), startDate : "", endDate : "", school : "", title : ""},
            currentId : "",
            startDate : "",
            endDate : "",
            school : "",
            title: "",           
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;   

        this.setState({ 
            //educationInfo: { ...this.state.educationInfo, [name]: value}
            [name]:value
        });
    }

    handleSubmit(event) {   
        event.preventDefault() 
        
        
        let edu = [{
            id: uniqid(),
            startDate: this.state.startDate,
            endDate : this.state.endDate,
            school : this.state.school,
            title : this.state.title
        }] 
        this.setState({
            formActive : false,
            formSubmitted : true,
            educationList : this.state.educationList.concat(edu),
            //educationInfo : {startDate : "", endDate : "", school : "", title : ""}
           // school : "",
        })
        
      console.log(this.state);
    }   

    renderForm(event) {       
        this.setState({
            formActive : true
        })       
    }        
          
        
    
    render(){      
        const { formActive, formSubmitted, educationList} = this.state;
        
        return(
            
            <div className="educationSection">
                <h2 className="educationHeader">Education</h2>
                <div>
                    <button onClick={this.renderForm}>Add School</button>
                </div>
                {formActive && <EducationForm 
                info={this.state}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}                
                /> }

                {/* {formSubmitted && <EducationInfo info={this.state.educationInfo} />} */}

                {educationList.map((school) => {
                    return (
                        <EducationInfo key={school.id}
                        info={school} />
                    )
                })}
                
                    
                
            </div>
        
        )
            
        
    }
        
    
}

export default Education;