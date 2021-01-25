import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'; 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator'; 
import PostService from '../../service/PostService';

class ListAllPostComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                posts: [],
				columns: [{  
                dataField: 'post_id',  
                 text: 'post_id'  ,
				 sort:true ,
				 filter: textFilter()

                },  

                      {  

                        dataField: 'postedOn',  

                        text: 'postedOn',  

                        sort: true ,
                        filter: textFilter()

                      },  

                     ]  
        }
		this.listPostRecord = this.listPostRecord.bind(this);
		this.listAllPosts = this.listAllPosts.bind(this);
        this.addPost = this.addPost.bind(this);
        
    }

   

    componentDidMount(){
        PostService.getAllPosts().then((res) => {
            this.setState({ posts: res.data});
        });
    }

    addPost(){
        this.props.history.push('/add-post');
    }
	listAllPosts(){
        this.props.history.push('/list-all-posts');
    }
	listPostRecord(){
        this.props.history.push('/list-post');
    }

    render() {
		const options = {  

                        page: 2,   

                        sizePerPageList: [ {  

                          text: '5', value: 5  

                        }, {  

                          text: '10', value: 10  

                        }, {  

                          text: 'All', value: this.state.posts.length  

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
                 <h2 className="text-center">Posts List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPost}> Add Post</button>
					<button className="btn btn-primary" onClick={this.listAllPosts}> List All Posts with sorting</button>
					<button className="btn btn-primary" onClick={this.listPostRecord}> List All Posts without sorting</button>
				</div>
				 
                 <br></br>
                 
				   

                        <div  style={{ marginTop: 20 }}>  

                        <BootstrapTable  
                        striped 
                        hover  
						keyField='post_id'  
                        data={ this.state.posts }  
                        columns={ this.state.columns } 
						filter={ filterFactory() }
						pagination={ paginationFactory() }						>
						</BootstrapTable>  
						 </div>  

            </div>
        )
    }
}

export default ListAllPostComponent
