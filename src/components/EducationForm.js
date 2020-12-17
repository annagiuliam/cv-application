import React, {Component} from 'react';

class EducationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationList : [],
            educationInfo : {startDate : "", endDate : "", school : "", title : ""},
            formSubmitted : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            
        this.setState({
            formSubmitted : true
        })
        event.preventDefault()
        console.log(this.state);
        // RIPRENDI DA QUI --> INSERISCI INFO IN LIST
    }
       
            
           
            
    
    render(){
        return(
            <div className="educationSection">
                <h2>Education</h2>
                    <div className="formDiv">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="school" className="formInput" onChange={this.handleChange} placeholder="Enter the school name" required></input>
                            <input type="text" name="title" className="formInput" onChange={this.handleChange} placeholder="Enter the title of study" required></input>
                            <input type="date" name="startDate" className="formInput" onChange={this.handleChange} placeholder="Enter the start date" required></input>
                            <input type="date" name="endDate" className="formInput" onChange={this.handleChange} placeholder="Enter the finish date" required></input>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                
            </div>
        
        )
            
        
    }
        
    
}

export default EducationForm;