import React from 'react';


const EducationForm = (props) => {

const {school} = props.info
    return (
        <div className="formDiv">            
        <form onSubmit={props.onSubmit}>
            <input type="text" name="school" className="formInput" onChange={props.onChange} placeholder="Enter the school name"  ></input>
            <input type="text" name="title" className="formInput" onChange={props.onChange} placeholder="Enter the title of study"  ></input>
            <input type="date" name="startDate" className="formInput" onChange={props.onChange} placeholder="Enter the start date"  ></input>
            <input type="date" name="endDate" className="formInput" onChange={props.onChange} placeholder="Enter the finish date"  ></input>
            <input type="submit" value="Submit" />
        </form>
    </div>
        
    )
}

export default EducationForm;