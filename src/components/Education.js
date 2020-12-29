import React, {useState} from "react";
import EducationInfo from "./EducationInfo";
import EducationForm from "./EducationForm";
import uniqid from "uniqid";

const Education = () => {
    const [formActive, setFormActive] = useState(false)     
    const [eduList, setEduList] = useState([]);       
    const [currEdu, setCurrEdu]  = useState({
                                        currentId : "",
                                        startDate : "",
                                        endDate : "",
                                        school : "",
                                        title: "",
                                        })                 
        
    

    const renderForm = (event) => {       
        setFormActive(true)      
    }  

   const handleChange = (event) =>  {
        const target = event.target;
        const value = target.value;
        const name = target.name;   

        setCurrEdu({...currEdu, [name]: value})
    }

    const handleSubmit = (event) =>  {   
        event.preventDefault() 
        
        let edu = [{
            currentId: uniqid(),
            startDate: currEdu.startDate,
            endDate : currEdu.endDate,
            school : currEdu.school,
            title : currEdu.title
        }] 

        const eduArr = eduList
                            .concat(edu)
                            .sort((a, b) => new Date (b.endDate) - new Date (a.endDate))
        
        setFormActive(false)  
        setEduList(eduArr)          
        setCurrEdu({ // it cannot be an empty object
            currentId : "",
            startDate : "",
            endDate : "",
            school : "",
            title: "",
        })  
       
    }   

    const handleDelete = (schoolId) => { 
        let filteredArray = eduList.filter(item => item.currentId !== schoolId);
        setEduList(filteredArray)
    }

    const handleEdit = (schoolId) => {
        const currSchool = eduList.find(item => item.currentId === schoolId);
        setFormActive(true);
        setCurrEdu({...currSchool})
        handleDelete(schoolId);
        
    }  
   
    return(   
        <div className="educationSection">
            <h2 className="educationHeader">Education</h2>
            <div className="addBtnDiv">
                <button  onClick={renderForm}>Add School</button>
            </div>
            {formActive && <EducationForm 
                info={currEdu}
                onSubmit={handleSubmit}
                onChange={handleChange}                
            /> }

            {eduList.map((school) => {
                return ( 
                    <EducationInfo key={school.currentId}
                        info={school} 
                        onDelete={() => handleDelete(school.currentId)}
                        onEdit={() => handleEdit(school.currentId)}
                    />                
                )
            })}
        </div>
    )   
    
}

export default Education;