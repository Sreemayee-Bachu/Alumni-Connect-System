import React, { Component } from 'react'
import AlumniService from '../../service/AlumniService';
import BootstrapTable from 'react-bootstrap-table-next'; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator'; 
class ViewAllAlumniComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alumni: [],
            columns: [
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
    }

    componentDidMount(){
        AlumniService.getAllAlumni().then( res => {
            this.setState({alumni: res.data});
        })
    }

    render() {
        const options = {  

            page: 2,   

            sizePerPageList: [ {  

              text: '5', value: 5  

            }, {  

              text: '10', value: 10  

            }, {  

              text: 'All', value: this.state.alumni.length  

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
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Friends</h3>
                    {/* <div className = "card-body">
                    <table className = "table table-striped table-bordered">
                        <thead>
                                <tr>
								     <th> Name </th>
                                    <th> YearOfPassing</th>
                                    <th> Stream</th>
                                    <th> EmailId</th>
                                </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.alumni.map(
                                        alumnis => 
                                        <tr key = {alumnis.alumniId}>
											  <td> { alumnis.name} </td>
                                             <td> { alumnis.yop} </td>   
                                             <td> {alumnis.stream}</td>
                                             <td> {alumnis.emailId}</td>
                                        </tr>
                                    )
                                }
                        </tbody>
                    </table>

                </div> */}
                <br></br>
                

                        <div  style={{ marginTop: 20 }}>  

                        <BootstrapTable  
                        striped 
                        hover  
						keyField='alumni_id'  
                        data={ this.state.alumni }  
                        columns={ this.state.columns } 
						filter={ filterFactory() }
						pagination={ paginationFactory() }						>
						</BootstrapTable>  
						 </div>  


            </div>
            </div>
        )
    }
}

export default ViewAllAlumniComponent
