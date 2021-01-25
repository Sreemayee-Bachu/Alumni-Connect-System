import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator'; 
import CommentService from '../../service/CommentService';

class ListAllCommentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                comments: [],
				columns: [{  
                dataField: 'comment_id',  
                 text: 'comment_id'  ,
				 sort:true ,
				 filter: textFilter()

                },  

                      {  

                        dataField: 'commentedOn',  

                        text: 'commentedOn',  

                        sort: true ,
                        filter: textFilter()

                      },  

                     ]  
        }
		this.listCommentRecord = this.listCommentRecord.bind(this);
		this.listAllComments = this.listAllComments.bind(this);
        this.addComment = this.addComment.bind(this);
        
    }

   

    componentDidMount(){
        CommentService.getAllComments().then((res) => {
            this.setState({ comments: res.data});
        });
    }

    addComment(){
        this.props.history.push('/add-comment');
    }
	listAllComments(){
        this.props.history.push('/list-all-comments/_all');
    }
	listCommentRecord(){
        this.props.history.push('/list-comment');
    }

    render() {
		const options = {  

                        page: 2,   

                        sizePerPageList: [ {  

                          text: '5', value: 5  

                        }, {  

                          text: '10', value: 10  

                        }, {  

                          text: 'All', value: this.state.comments.length  

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
                 <h2 className="text-center">Comments </h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addComment}> Add Comment</button>
					<button className="btn btn-primary" onClick={this.listAllComments}> List All Comments with sorting</button>
					<button className="btn btn-primary" onClick={this.listCommentRecord}> List All Comments without sorting</button>
				</div>
				 
                 <br></br>
                 
				 
				 <div class="row" className="hdr">    

                        <div class="col-sm-12 btn btn-info">    

                        Comment List with sorting please click on header of column  

                         </div>    

                          </div>    

                        <div  style={{ marginTop: 20 }}>  

                        <BootstrapTable  
                        striped 
                        hover  
						keyField='comment_id'  
                        data={ this.state.comments }  
                        columns={ this.state.columns } 
						filter={ filterFactory() }
						pagination={ paginationFactory() }						>
						</BootstrapTable>  
						 </div>  

            </div>
        )
    }
}

export default ListAllCommentComponent
