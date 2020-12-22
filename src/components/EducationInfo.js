import React from 'react';
import { format } from 'date-fns';


const EducationInfo = (props) => {
    
    function formatDate(date) {
        const dateInfo = date.split("-");
        const formDate = format(new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]), "PP");
        return formDate;
    }

    const {startDate, endDate, school, title} = props.info;
    const formStart = formatDate(startDate);
    const formEnd = formatDate(endDate);

    return (
        <div className="eduItem">  
            <div className="eduInfo" id="dates">{formStart} - {formEnd}</div>
            <div className="eduInfo" id="schoolLabel">School:</div>
            <div className="eduInfo" id="schoolData">{school}</div>
            <div className="eduInfo" id="titleLabel">Title:</div>
            <div className="eduInfo" id="titleData">{title}</div>
            <div className="buttonsDiv">
                <button id="eduDelBtn" onClick={props.onDelete}>Delete</button>
                <button id="eduEditBtn" onClick={props.onEdit}>Edit</button>
            </div> 
        </div>
    )
}

export default EducationInfo;