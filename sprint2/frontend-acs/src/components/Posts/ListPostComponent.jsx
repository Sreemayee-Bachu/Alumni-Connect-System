import React, { Component } from 'react'
import PostService from '../../service/PostService';

class ListPostComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                posts: [],
                count:0,
                count1:0
        }
		this.listAllPosts= this.listAllPosts.bind(this);
        this.addPost = this.addPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.listPostRecord = this.listPostRecord.bind(this);
        this.viewPost=this.viewPost.bind(this);
        this.addComment=this.addComment.bind(this);
        this.likeComment=this.likeComment.bind(this);
        this.dislikeComment=this.dislikeComment.bind(this);
    }

    
    viewPost(id){
        this.props.history.push(`/view-post/${id}`);
    }

    componentDidMount(){
        PostService.getAllPosts().then((res) => {
            this.setState({ posts: res.data});
        });
    }
    deletePost(post_id){
        PostService.deletePost(post_id).then( res => {
            this.setState({post: this.state.posts.filter(post => post.post_id !== post_id)});
        });
    }
    addPost(){
        this.props.history.push('/add-post');
    }
	listAllPosts(){
        this.props.history.push('/list-all-posts/_all');
    }
	listPostRecord(){
        this.props.history.push('/list-post');
    }
    addComment(){
        this.props.history.push('/list-comment');
    }
    likeComment(){
        
        console.log(this.state.posts.post_likes);
        // let count=2;
         let count = this.state.count + 1
         this.setState({
            count : count
         });
    }
    dislikeComment(){
        console.log(this.state.post_likes);
       // let count=2;
        let count1 = this.state.count1 - 1
        this.setState({
           count1 : count1
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Post List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPost}> Add Post</button>
					<button className="btn btn-primary" onClick={this.listAllPosts}> List All posts with sorting</button>
					<button className="btn btn-primary" onClick={this.listPostRecord}> List All posts without sorting</button>
				 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
								     <th> Post ID</th>
                                    <th> Post Content</th>
                                    <th> Post Likes</th>
                                    <th> Posted On</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.posts.map(
                                        post => 
                                        <tr key = {post.post_id}>
											  <td> { post.post_id} </td>
                                             <td> { post.post_content} </td>   
                                             <td> {post.post_likes}</td>
                                             <td> {post.postedOn}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.addComment}> Add Comment</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePost(post.post_id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPost(post.post_id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.likeComment} > Like : {this.state.count}</button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.dislikeComment}> Dislike : {this.state.count1}</button>
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

export default ListPostComponent
