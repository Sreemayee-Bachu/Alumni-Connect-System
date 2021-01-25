import React, { Component } from 'react'
import AlumniService from '../../service/AlumniService';

class ViewAlumniComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            alumni: {}
        }
    }

    componentDidMount(){
        AlumniService.getAlumniById(this.state.id).then( res => {
            this.setState({alumni: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Alumni Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.alumni.alumniname }</div>
                        </div>
                        <div className = "row">
                            <label> Stream: </label>
                            <div> { this.state.alumni.stream }</div>
                        </div>
                        <div className = "row">
                            <label> Year Of Passing: </label>
                            <div> { this.state.alumni.yearOfPassing }</div>

                        </div>
                        <div className = "row">
                            <label> Phone: </label>
                            <div> { this.state.alumni.phone }</div>

                        </div>
                        <div className = "row">
                            <label> EmailId: </label>
                            <div> { this.state.alumni.email }</div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAlumniComponent
