import React, {Component} from "react";
import EducationInfo from "./EducationInfo";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {        
            formActive : false,
            educationList : [],            
            currentId : "",
            startDate : "",
            endDate : "",
            school : "",
            title: "",              
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    renderForm(event) {       
        this.setState({
            formActive : true
        })       
    }  

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;   

        this.setState({ 
            [name]:value
        });
    }

    handleSubmit(event) {   
        event.preventDefault() 
        
        let edu = [{
            currentId: uniqid(),
            startDate: this.state.startDate,
            endDate : this.state.endDate,
            school : this.state.school,
            title : this.state.title
        }] 
        
        this.setState({
            formActive : false,            
            educationList : this.state.educationList
                                                    .concat(edu)
                                                    .sort((a, b) => new Date (b.endDate) - new Date (a.endDate)),
            currentId: "",
            startDate: "",
            endDate : "",
            school : "",
            title : ""
           
        })
    }   

    handleDelete(schoolId) { 
        let filteredArray = this.state.educationList.filter(item => item.currentId !== schoolId)
        this.setState({educationList: filteredArray});
    }

    handleEdit(schoolId) {
        const currSchool = this.state.educationList.find(item => item.currentId === schoolId);
        this.setState({           
            formActive : true,
            currentId : currSchool.currentId,
            startDate : currSchool.startDate,
            endDate : currSchool.endDate,
            school : currSchool.school,
            title: currSchool.title, 
        })
        this.handleDelete(schoolId);
    }  
    
    render(){        
        const { formActive, educationList} = this.state;
        
        return(   
            <div className="educationSection">
                <h2 className="educationHeader">Education</h2>
                <div className="addBtnDiv">
                    <button  onClick={this.renderForm}>Add School</button>
                </div>
                {formActive && <EducationForm 
                    info={this.state}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}                
                /> }

                {educationList.map((school) => {
                    return ( 
                        <EducationInfo key={school.currentId}
                            info={school} 
                            onDelete={() => this.handleDelete(school.currentId)}
                            onEdit={() => this.handleEdit(school.currentId)}
                        />                
                    )
                })}
            </div>
        )   
    }
}

export default Education;