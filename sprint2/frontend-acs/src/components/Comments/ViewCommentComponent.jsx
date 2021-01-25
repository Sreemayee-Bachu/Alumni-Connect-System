
import { Component } from 'react';
import CommentService from '../../service/CommentService';

class ViewCommentComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            comment: {}
        }
    }

    componentDidMount(){
        CommentService.getCommentById(this.state.id).then( res => {
            this.setState({comment: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View comment Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Comment Content: </label>
                            <div> { this.state.comment.comment_content }</div>
                        </div>
                        <div className = "row">
                            <label> Comment Likes: </label>
                            <div> { this.state.comment.comment_likes }</div>
                        </div>
                        <div className = "row">
                            <label> CommentedOn: </label>
                            <div> { this.state.comment.commentedOn }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCommentComponent
