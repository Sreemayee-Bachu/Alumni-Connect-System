import React, { Component } from 'react'
import CommentService from '../../service/CommentService';

class ListCommentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                comments: []
        }
		this.listAllComments= this.listAllComments.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.listCommentRecord = this.listCommentRecord.bind(this);
        this.viewComment=this.viewComment.bind(this);
        this.addComment=this.addComment.bind(this);
    }

    deleteComment(comment_id){
        CommentService.deleteComment(comment_id).then( res => {
            this.setState({comment: this.state.comments.filter(comment => comment.comment_id !== comment_id)});
        });
    }
    viewComment(comment_id){
        this.props.history.push(`/view-comment/${comment_id}`);
    }

    componentDidMount(){
        CommentService.getAllComments().then((res) => {
            this.setState({ comments: res.data});
        });
    }

    
	listAllComments(){
        this.props.history.push('/list-all-comments/_all');
    }
	listCommentRecord(){
        this.props.history.push('/list-comment');
    }
    addComment(){
        this.props.history.push('/add-comment');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center"> Comments </h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addComment}> Add comment</button>
					<button className="btn btn-primary" onClick={this.listAllComments}> List All comments with sorting</button>
					<button className="btn btn-primary" onClick={this.listCommentRecord}> List All comments without sorting</button>
				 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
								     <th> Comment ID</th>
                                    <th> Comment Content</th>
                                    <th> Comment Likes</th>
                                    <th> Commented On</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.comments.map(
                                        comment => 
                                        <tr key = {comment.comment_id}>
											  <td> { comment.comment_id} </td>
                                             <td> { comment.comment_content} </td>   
                                             <td> {comment.comment_likes}</td>
                                             <td> {comment.commentedOn}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteComment(comment.comment_id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewComment(comment.comment_id)} className="btn btn-info">View </button>
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

export default ListCommentComponent
