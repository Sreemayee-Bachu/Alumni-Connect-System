import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'; 
import AlumniService from '../../service/AlumniService';

class ListAlumniComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                alumnis: []
        }
		this.listAllAlumni = this.listAllAlumni.bind(this);
        this.editAlumni = this.editAlumni.bind(this);
        this.deleteAlumni = this.deleteAlumni.bind(this);
		this.listAlumniRecord = this.listAlumniRecord.bind(this);
    }

    deleteAlumni(alumni_id){
        AlumniService.deleteAlumni(alumni_id).then( res => {
            this.setState({alumnis: this.state.alumnis.filter(alumni => alumni.alumni_id !== alumni_id)});
        });
    }
    viewAlumni(alumni_id){
        this.props.history.push(`/view-alumni/${alumni_id}`);
    }
    editAlumni(alumni_id){
        this.props.history.push(`/update-alumni/${alumni_id}`);
    }

    componentDidMount(){
        AlumniService.getAllAlumni().then((res) => {
            this.setState({ alumnis: res.data});
        });
    }

	listAllAlumni(){
        this.props.history.push('/list-all-alumni/_all');
    }
	listAlumniRecord(){
        this.props.history.push('/profile-page');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Alumni List</h2>
                 <div className = "row">
					<button className="btn btn-primary" onClick={this.listAllAlumni}> List All Alumni with sorting</button>
					<button className="btn btn-primary" onClick={this.listAlumniRecord}> List All Alumni without sorting</button>
				 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
								     <th> ID</th>
                                    <th> Name</th>
                                    <th> Stream</th>
                                    <th> YearOfPassing</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.alumnis.map(
                                        alumni => 
                                        <tr key = {alumni.alumni_id}>
											  <td> { alumni.alumni_id} </td>
                                             <td> { alumni.alumniname} </td>   
                                             <td> {alumni.stream}</td>
                                             <td> {alumni.yearOfPassing}</td>
                                             <td>
                                                 <button onClick={ () => this.editAlumni(alumni.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAlumni(alumni.alumni_id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAlumni(alumni.alumni_id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
				 
				

            </div>
        )
    }
}

export default ListAlumniComponent
