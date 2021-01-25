import { Component } from "react";
import CommentService from "../../service/CommentService";
import moment from "moment";
class AddCommentComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,
            comment_id:'',
            comment_content:'',
            comment_likes:'',
            commentedOn:moment().format("YYYY-MM-DD")
        }
        this.changeCommentIdHandler=this.changeCommentIdHandler.bind(this);
        this.changeCommentContentHandler=this.changeCommentContentHandler.bind(this);
        this.changeCommentLikeHandler=this.changeCommentLikeHandler.bind(this);
        this.changeCommentedOnHandler=this.changeCommentedOnHandler.bind(this);
        this.saveOrUpdateComment=this.saveOrUpdateComment.bind(this);
    }
    saveOrUpdateComment =(e)=>{
        e.preventDefault();
        const comment = {
            comment_id: this.state.comment_id, comment_content: this.state.comment_content,comment_likes: this.state.comment_likes,commentOn: this.state.commentOn};
        console.log("comment =>"+ JSON.stringify(comment));
        CommentService.uploadComment(comment).then(res =>{
            this.props.history.push('/profile-page');
        });
          
    };
    changeCommentIdHandler =(event)=>{
        this.setState({comment_id: event.target.value})
    }
    changeCommentContentHandler =(event)=>{
        this.setState({comment_content: event.target.value})
    }
    changeCommentLikeHandler =(event)=>{
        this.setState({comment_likes: event.target.value})
    }
    changeCommentedOnHandler =(event)=>{
        this.setState({commentedOn: event.target.value})
    }
    cancel(){
        this.props.history.push('/profile-page');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div  className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Add Comment</h3>
                             <div className="card-body">
                                 <form>
                                 <div className="form-group">
                                         <label> Comment Id: </label>
                                         <input placeholder="comment_id " name="comment_id " className="form-control"
                                                value={this.state.comment_id} onChange={this.changeCommentIdHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label> Comment Content:</label>
                                         <input placeholder="comment_content " name="comment_content " className="form-control"
                                                value={this.state.comment_content} onChange={this.changeCommentContentHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label> Comment Likes:</label>
                                         <input placeholder="comment_likes" name="comment_likes " className="form-control"
                                                value={this.state.comment_likes} onChange={this.changeCommentLikeHandler}></input>
                                     </div>
                                     
                                     <div className="form-group">
                                         <label> Commented On:</label>
                                         <input placeholder="commentedOn " name="commentedOn" className="form-control"
                                                value={this.state.commentedOn} onChange={this.changeCommentedOnHandler}></input>
                                     </div>
                                     <button className="btn btn-success" onClick={this.saveOrUpdateComment}>Add</button>
                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                 </form>
                             </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
export default AddCommentComponent