import { Component } from "react";
import WorkService from "../../service/WorkService";
class AddWorkComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
			work_id:'',
            companyName: '',
            workLocation: '',
            position: '',
            endDate:'',
            startDate:'',
            currentlyWorking:''
        }
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
           WorkService.getWorkById(this.state.work_id).then( (res) =>{
            let work = res.data;
            this.setState({work_id:work.id,
                companyName: work.companyName,
                workLocation: work.workLocation,
                position : work.position,
                endDate: work.endDate,
                startDate: work.startDate,
                currentlyWorking: work.currentlyWorking 
            });
        });
        }        
    }
    saveOrUpdateWork = (e) => {
        e.preventDefault();
        let work = {work_id:this.state.work_id,
            companyName: this.state.companyName,
            workLocation: this.state.workLocation,
            position : this.state.position,
            endDate: this.state.endDate,
            startDate: this.state.startDate,
            currentlyWorking: this.state.currentlyWorking };
        console.log('work => ' + JSON.stringify(work));

       
        if(this.state.id === '_add'){
            WorkService.addWork(work).then(res =>{
                this.props.history.push('/list-work');
            });
        }else{
            WorkService.updateWork(this.state.work_id,work).then( res => {
                this.props.history.push('/list-work');
            });
        }
    }
    changeId1Handler= (event) => {
        this.setState({work_id: event.target.value});
    }
    
    changeCompanynameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changeWorklocationHandler= (event) => {
        this.setState({workLocation: event.target.value});
    }

    changePositionHandler= (event) => {
        this.setState({position: event.target.value});
    }

    changeEnddateHandler= (event) => {
        this.setState({endDate: event.target.value});
    }

    changeStartdateHandler= (event) => {
        this.setState({startDate: event.target.value});
    }

    changeCurrentlyWorkingHandler= (event) => {
        this.setState({currentlyWorking: event.target.value});
    }
    cancel(){
        this.props.history.push('/list-work');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Work</h3>
        }else{
            return <h3 className="text-center">Update Work</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
										<div className = "form-group">
                                            <label> ID: </label>
                                            <input placeholder="work_id" name="work_id" className="form-control" 
                                                value={this.state.work_id} onChange={this.changeId1Handler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="companyName" name="companyName" className="form-control" 
                                                value={this.state.companyName} onChange={this.changeCompanynameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Work Location: </label>
                                            <input placeholder="workLocation" name="workLocation" className="form-control" 
                                                value={this.state.workLocation} onChange={this.changeWorklocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Position: </label>
                                            <input placeholder="position" name="position" className="form-control" 
                                                value={this.state.position} onChange={this.changePositionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Start Date: </label>
                                            <input placeholder="startDate" name="startDate" className="form-control" 
                                                value={this.state.startDate} onChange={this.changeStartdateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Currently Working(y/n): </label>
                                            <input placeholder="currentlyWorking" name="currentlyWorking" className="form-control" 
                                                value={this.state.currentlyWorking} onChange={this.changeCurrentlyWorkingHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> End Date: </label>
                                            <input placeholder="endDate" name="endDate" className="form-control" 
                                                value={this.state.endDate} onChange={this.changeEnddateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateWork}>Add</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
} 
export default AddWorkComponent