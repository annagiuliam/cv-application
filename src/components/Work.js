import React, {Component} from "react";
import WorkForm from "./WorkForm";
import WorkInfo from "./WorkInfo";
import uniqid from "uniqid";

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formActive : false,
            workList : [],
            currentId : "",
            startDate : "",
            endDate : "",
            employer : "",
            title: "", 
            tasks : ""
        }

        this.renderForm = this.renderForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        
        let wk = [{
            currentId: uniqid(),
            startDate: this.state.startDate,
            endDate : this.state.endDate,
            employer : this.state.employer,
            title : this.state.title,
            tasks : this.state.tasks
        }] 

        this.setState({
            formActive : false,            
            workList : this.state.workList
                                        .concat(wk)
                                        .sort((a, b) => new Date (b.endDate) - new Date (a.endDate)),
            currentId: "",
            startDate: "",
            endDate : "",
            employer : "",
            title : "",
            tasks : ""
           
        })
    }

    handleDelete(workId) {
        let filteredArray = this.state.workList.filter(item => item.currentId !== workId)
        this.setState({workList: filteredArray});
    }

    handleEdit(workId) {
        const currWork = this.state.workList.find(item => item.currentId === workId)
        this.setState({
            formActive : true,
            currentId: currWork.currentId,
            startDate: currWork.startDate,
            endDate : currWork.endDate,
            employer : currWork.employer,
            title : currWork.title,
            tasks : currWork. tasks
        })
        this.handleDelete(workId);
    }

    render() {
        const {formActive, workList} = this.state;
        return (
            <div className="workSection">
                <h2>Work Experience</h2>
                <div className="addBtnDiv">
                    <button  onClick={this.renderForm}>Add Work Experience</button>
                </div>
                {formActive && 
                <WorkForm 
                    info={this.state}
                    onChange={this.handleChange} 
                    onSubmit={this.handleSubmit}
                />}

                {workList.map((work) => {
                    return ( 
                        <WorkInfo key={work.currentId}
                            info={work} 
                            onDelete={() => this.handleDelete(work.currentId)}
                            onEdit={() => this.handleEdit(work.currentId)}
                        />                
                    )
                })}
            </div>
        )
    }
}

export default Work;