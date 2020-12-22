import React from "react";

const WorkForm = (props) => {

    const {employer, title, tasks, startDate, endDate} = props.info
    return (
        <div className="formDiv">            
            <form onSubmit={props.onSubmit}>
                <input type="text" name="employer" value={employer} className="formInput" onChange={props.onChange} placeholder="Enter the employer name" required></input>
                <input type="text" name="title" value={title} className="formInput" onChange={props.onChange} placeholder="Enter the position title"  required></input>
                <input type="date" name="startDate" value={startDate} className="formInput" onChange={props.onChange} placeholder="Enter the start date"  required></input>
                <input type="date" name="endDate" value={endDate} className="formInput" onChange={props.onChange} placeholder="Enter the finish date"  required></input>
                <textarea rows="3" cols="29" name="tasks" value={tasks} className="formTextArea" onChange={props.onChange} placeholder="Describe your tasks"  required></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div> 
    )
}

export default WorkForm;