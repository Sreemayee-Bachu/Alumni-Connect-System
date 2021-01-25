import React, { Component } from 'react'
import PostService from '../../service/PostService';

class ViewPostComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            post: {}
        }
    }

    componentDidMount(){
        PostService.getPostById(this.state.id).then( res => {
            this.setState({post: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Post Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Post Content: </label>
                            <div> { this.state.post.post_content }</div>
                        </div>
                        <div className = "row">
                            <label> Post Likes: </label>
                            <div> { this.state.post.post_likes }</div>
                        </div>
                        <div className = "row">
                            <label> PostedOn: </label>
                            <div> { this.state.post.postedOn }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPostComponent
