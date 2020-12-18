import React from 'react';


const EducationInfo = (props) => {

    const {startDate, endDate, school, title} = props.info;
    

    return (
        <div className="eduItem">  
            <div className="eduInfo" id="dates">{startDate} - {endDate}</div>
            <div className="eduInfo" id="schoolLabel">School:</div>
            <div className="eduInfo" id="schoolData">{school}</div>
            <div className="eduInfo" id="titleLabel">Title:</div>
            <div className="eduInfo" id="titleData">{title}</div>
        </div>
    )

}

export default EducationInfo;