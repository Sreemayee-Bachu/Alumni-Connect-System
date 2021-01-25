import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator'; 
import AlumniService from '../../service/AlumniService';

class ListAllAlumniComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                alumnis: [],
				columns: [{  
                dataField: 'alumniId',  
                 text: 'alumniId'  ,
				 sort:true ,
				 filter: textFilter()

                },  

                      {  

                        dataField: 'alumniname',  

                        text: 'alumniname',  

                        sort: true ,
                        filter: textFilter()

                      },  
                      {  

                        dataField: 'stream',  

                        text: 'stream',  

                        sort: true ,
                        filter: textFilter()

                      },
                      {  

                        dataField: 'yearOfPassing',  

                        text: 'yearOfPassing',  

                        sort: true ,
                        filter: textFilter()

                      },
                      

                     ]  
        }
		this.listAlumniRecord = this.listAlumniRecord.bind(this);
		this.listAllAlumnis = this.listAllAlumnis.bind(this);
    }

   

    componentDidMount(){
       AlumniService.getAllAlumni().then((res) => {
            this.setState({ alumnis: res.data});
        });
    }

	listAllAlumnis(){
        this.props.history.push('/list-all-alumnis');
    }
	listAlumniRecord(){
        this.props.history.push('/list-alumni');
    }

    render() {
		const options = {  

                        page: 2,   

                        sizePerPageList: [ {  

                          text: '5', value: 5  

                        }, {  

                          text: '10', value: 10  

                        }, {  

                          text: 'All', value: this.state.alumnis.length  

                        } ],   

                        sizePerPage: 5,   

                        pageStartIndex: 0,   

                        paginationSize: 3,    

                        prePage: 'Prev',   

                        nextPage: 'Next',   

                        firstPage: 'First',   

                        lastPage: 'Last',   

                       

                      }; 
        return (
            <div>
                 <h2 className="text-center">Alumni List</h2>
                 <div className = "row">
					<button className="btn btn-primary" onClick={this.listAllAlumnis}> List All Alumni with sorting</button>
					<button className="btn btn-primary" onClick={this.listAlumniRecord}> List All Alumni without sorting</button>
				</div>
				 
                 <br></br>
                     

                        <div  style={{ marginTop: 20 }}>  

                        <BootstrapTable  
                        striped 
                        hover  
						keyField='alumni_id'  
                        data={ this.state.alumnis }  
                        columns={ this.state.columns } 
						filter={ filterFactory() }
						pagination={ paginationFactory() }						>
						</BootstrapTable>  
						 </div>  

            </div>
        )
    }
}

export default ListAllAlumniComponent
