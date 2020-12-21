import React from 'react';


const EducationForm = (props) => {

const {school, title, startDate, endDate} = props.info
    return (
        <div className="formDiv">            
        <form onSubmit={props.onSubmit}>
            <input type="text" name="school" value={school} className="formInput" onChange={props.onChange} placeholder="Enter the school name"  ></input>
            <input type="text" name="title" value={title} className="formInput" onChange={props.onChange} placeholder="Enter the title of study"  ></input>
            <input type="date" name="startDate" value={startDate} className="formInput" onChange={props.onChange} placeholder="Enter the start date"  ></input>
            <input type="date" name="endDate" value={endDate} className="formInput" onChange={props.onChange} placeholder="Enter the finish date"  ></input>
            <input type="submit" value="Submit" />
        </form>
    </div>
        
    )
}

export default EducationForm;