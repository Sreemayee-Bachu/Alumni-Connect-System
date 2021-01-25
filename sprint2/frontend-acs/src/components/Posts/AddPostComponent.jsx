import { Component } from "react";
import PostService from "../../service/PostService";
import moment from "moment";
class AddPostComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,
            post_id:'',
            post_content:'',
            post_likes:'',
            postedOn:moment().format("YYYY-MM-DD")
        }
        this.changePostIdHandler=this.changePostIdHandler.bind(this);
        this.changePostContentHandler=this.changePostContentHandler.bind(this);
        this.changePostLikeHandler=this.changePostLikeHandler.bind(this);
        this.changePostedOnHandler=this.changePostedOnHandler.bind(this);
        this.saveOrUpdatePost=this.saveOrUpdatePost.bind(this);
    }
    
    saveOrUpdatePost =(e)=>{
        e.preventDefault();
        const post = {
            post_id: this.state.post_id, post_content: this.state.post_content,post_likes: this.state.post_likes,postedOn: this.state.postedOn};
        console.log("post =>"+ JSON.stringify(post));
        PostService.uploadPost(post).then(res =>{
            this.props.history.push('/profile-page');
        });
          
    };
    changePostIdHandler =(event)=>{
        this.setState({post_id: event.target.value})
    }
    changePostContentHandler =(event)=>{
        this.setState({post_content: event.target.value})
    }
    changePostLikeHandler =(event)=>{
        this.setState({post_likes: event.target.value})
    }
    changePostedOnHandler =(event)=>{
        this.setState({postedOn: event.target.value})
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
                             <h3 className="text-center">Add Post</h3>
                             <div className="card-body">
                                 <form>
                                 <div className="form-group">
                                         <label> Post Id: </label>
                                         <input placeholder="post_id " name="post_id " className="form-control"
                                                value={this.state.post_id} onChange={this.changePostIdHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label> Post Content:</label>
                                         <input placeholder="post_content " name="post_content " className="form-control"
                                                value={this.state.post_content} onChange={this.changePostContentHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label> Post Likes:</label>
                                         <input placeholder="post_likes" name="post_likes " className="form-control"
                                                value={this.state.post_likes} onChange={this.changePostLikeHandler}></input>
                                     </div>
                                     
                                     <div className="form-group">
                                         <label> Posted On:</label>
                                         <input placeholder="postedOn " name="postedOn" className="form-control"
                                                value={this.state.postedOn} onChange={this.changePostedOnHandler}></input>
                                     </div>
                                     <button className="btn btn-success" onClick={this.saveOrUpdatePost}>Add</button>
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
export default AddPostComponent