import axios from 'axios';

const Commentt_API_BASE_URL = "http://localhost:7777/api/comment";

class CommentService{
    uploadComment(comment){
        return axios.post(  Commentt_API_BASE_URL,comment);
    }
    getAllComments(){
        return axios.get( Commentt_API_BASE_URL);
    }
    deleteComment(commentId){
        return axios.delete( Commentt_API_BASE_URL + '/' + commentId);
    }
    getCommentById(commentId){
        return axios.get( Commentt_API_BASE_URL + '/' + commentId)
    }
}
export default CommentService