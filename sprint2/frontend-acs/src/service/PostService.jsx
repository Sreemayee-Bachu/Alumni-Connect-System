import axios from 'axios';

const Post_API_BASE_URL = "http://localhost:7777/api/posts";

class PostService{
    uploadPost(post){
        return axios.post(Post_API_BASE_URL,post);
    }
    getAllPosts(){
        return axios.get(Post_API_BASE_URL);
    }
    deletePost(postId){
        return axios.delete(Post_API_BASE_URL + '/' + postId);
    }
    getPostById(postId){
        return axios.get(Post_API_BASE_URL + '/' + postId)
    }
}

export default new PostService()