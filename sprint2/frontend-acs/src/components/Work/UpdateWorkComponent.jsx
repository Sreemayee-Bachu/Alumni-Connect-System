import React, { Component } from 'react'
import WorkService from '../../service/WorkService';

class UpdateWorkComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
			id1:'',
            companyname: '',
            worklocation: '',
            position: '',
            enddate:'',
            startdate:'',
            currentlyworking:''
        }
    }

    componentDidMount(){
        WorkService.getWorkById(this.state.id).then( (res) =>{
            let work = res.data;
            this.setState({id1:work.id1,
                companyname: work.companyname,
                worklocation: work.worklocation,
                position : work.position,
                enddate: work.enddate,
                startdate: work.startdate,
                currentlyworking: work.currentlyworking
                });
        });
    }

    updateWork = (e) => {
        e.preventDefault();
        let work = {id:this.state.id1,
            companyname: this.state.companyname,
            worklocation: this.state.worklocation,
            position : this.state.position,
            enddate: this.state.enddate,
            startdate: this.state.startdate,
            currentlyworking: this.state.currentlyworking};
            console.log('work => ' + JSON.stringify(work));
            console.log('id => ' + JSON.stringify(this.state.id));
            WorkService.updateWork(this.state.id,work).then( res => {
            this.props.history.push('/list-work');
        });
    }
    
    changeId1Handler= (event) => {
        this.setState({id1: event.target.value});
    }
    
    changeCompanynameHandler= (event) => {
        this.setState({companyname: event.target.value});
    }

    changeWorklocationHandler= (event) => {
        this.setState({worklocation: event.target.value});
    }

    changePositionHandler= (event) => {
        this.setState({position: event.target.value});
    }

    changeEnddateHandler= (event) => {
        this.setState({enddate: event.target.value});
    }

    changeStartdateHandler= (event) => {
        this.setState({startdate: event.target.value});
    }

    changeCurrentlyWorkingHandler= (event) => {
        this.setState({currentlyworking: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Work</h3>
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

export default UpdateWorkComponent
