import React from "react";
import { format } from 'date-fns';

const WorkInfo = (props) => {
    
    function formatDate(date) {
            const dateInfo = date.split("-");
            const formDate = format(new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]), "PP");
            return formDate;    
    }

    const {startDate, endDate, employer, title, tasks} = props.info;
    const formStart = formatDate(startDate);
    const formEnd = formatDate(endDate);

    return (
        <div className="workItem">  
            <div className="workInfo" id="dates">{formStart} - {formEnd}</div>
            <div className="workInfo" id="employerLabel">Employer:</div>
            <div className="workInfo" id="employerData">{employer}</div>
            <div className="workInfo" id="titleLabel">Title:</div>
            <div className="workInfo" id="titleData">{title}</div>
            <div className="workInfo" id="tasksLabel">Tasks:</div>
            <div className="workInfo" id="tasksData">{tasks}</div>
            <div className="buttonsDiv">
                <button id="workDelBtn" onClick={props.onDelete}>Delete</button>
                <button id="workEditBtn" onClick={props.onEdit}>Edit</button>
            </div>
        </div>
    )
 }
    
export default WorkInfo;
