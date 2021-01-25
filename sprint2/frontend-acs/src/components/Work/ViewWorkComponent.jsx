import React, { Component } from 'react'
import WorkService from '../../service/WorkService';

class ViewWorkComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            work: {}
        }
    }

    componentDidMount(){
        WorkService.getWorkById(this.state.id).then( res => {
            this.setState({work: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Work Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Company Name: </label>
                            <div> { this.state.work.companyName }</div>
                        </div>
                        <div className = "row">
                            <label> Work Location: </label>
                            <div> { this.state.work.workLocation }</div>
                        </div>
                        <div className = "row">
                            <label> Position : </label>
                            <div> { this.state.work.position }</div>
                        </div>
                        <div className = "row">
                            <label> Start date : </label>
                            <div> { this.state.work.startDate }</div>
                        </div>
                        <div className = "row">
                            <label> Currently working : </label>
                            <div> { this.state.work.currentlyWorking }</div>
                        </div>
                        <div className = "row">
                            <label> End date : </label>
                            <div> { this.state.work.endDate }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewWorkComponent
