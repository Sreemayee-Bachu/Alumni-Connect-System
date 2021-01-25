
import BootstrapTable from 'react-bootstrap-table-next'; 
import { Component } from 'react';
import WorkService from '../../service/WorkService';

class ListWorkComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {

                works: []
        }
		//this.listAllWork = this.listAllWork.bind(this);
        this.addWork = this.addWork.bind(this);
        this.editWork = this.editWork.bind(this);
        this.deleteWork = this.deleteWork.bind(this);
		this.listWorkRecord = this.listWorkRecord.bind(this);
    }
    deleteWork(id){
        WorkService.deleteWork(id).then( res => {
            this.setState({works: this.state.works.filter(work => work.id !== id)});
        });
    }
    viewWork(id){
        this.props.history.push(`/view-work/${id}`);
    }
    editWork(id){
        this.props.history.push(`/add-work/${id}`);
    }
    componentDidMount(){
        WorkService.getAllWork().then((res) => {
			
            this.setState({ work: res.data});
        });
    }

    addWork(){
        this.props.history.push('/add-work/_add');
    }
	// listAllWork(){
    //     this.props.history.push('/list-all-work/_all');
    // }
	listWorkRecord(){
        this.props.history.push('/list-work');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Work List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addWork}> Add Work</button>
                </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
								     <th> ID</th>
                                    <th> Company Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.works.map(
                                        work => 
                                        <tr key = {work.work_id}>
											  <td> {work.work_id} </td>
                                             <td> { work.companyName} </td>   
                                             <td>
                                                 <button onClick={ () => this.editWork(work.work_id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteWork(work.work_id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewWork(work.work_id)} className="btn btn-info">View </button>
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

export default ListWorkComponent
