import React, {useState} from "react";
import WorkForm from "./WorkForm";
import WorkInfo from "./WorkInfo";
import uniqid from "uniqid";

const Work = () => {
    const [formActive, setFormActive] = useState(false)
    const [workList, setWorkList] = useState([])
    const [currWork, setCurrWork] = useState({
                                        currentId : "",
                                        startDate : "",
                                        endDate : "",
                                        employer : "",
                                        title: "", 
                                        tasks : ""
                                        })
 
   const renderForm = (event) => {       
        setFormActive(true)      
    }  

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;   

        setCurrWork({...currWork, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()         
        
        let wk = [{
            currentId: uniqid(),
            startDate: currWork.startDate,
            endDate : currWork.endDate,
            employer : currWork.employer,
            title : currWork.title,
            tasks : currWork.tasks
        }] 
        const workArr = workList
                            .concat(wk)
                            .sort((a, b) => new Date (b.endDate) - new Date (a.endDate));

        setFormActive(false);
        setWorkList(workArr);
        setCurrWork({
            currentId: "",
            startDate: "",
            endDate : "",
            employer : "",
            title : "",
            tasks : ""
        })
 
    }

    const handleDelete = (workId) => {
        let filteredArray = workList.filter(item => item.currentId !== workId);
        setWorkList(filteredArray);
    }

    const handleEdit = (workId) => {
        const currWork = workList.find(item => item.currentId === workId)
        setFormActive(true);
        setCurrWork({...currWork})
    
        handleDelete(workId);
    }

    return (
        <div className="workSection">
            <h2>Work Experience</h2>
            <div className="addBtnDiv">
                <button  onClick={renderForm}>Add Work Experience</button>
            </div>
            {formActive && 
            <WorkForm 
                info={currWork}
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />}

            {workList.map((work) => {
                return ( 
                    <WorkInfo key={work.currentId}
                        info={work} 
                        onDelete={() => handleDelete(work.currentId)}
                        onEdit={() => handleEdit(work.currentId)}
                    />                
                )
            })}
        </div>
    )
    
}

export default Work;