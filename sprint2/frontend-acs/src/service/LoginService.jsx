import axios from 'axios';

const Login_API_BASE_URL = "http://localhost:7777/api";

class LoginService{
    signin(username,password){
        return axios.get(Login_API_BASE_URL + '/login' +'/'+ username +'/'+password); 
    }

    changePassword(username , oldPassword , newPassword){
        return axios.get(Login_API_BASE_URL + '/auth' +'/'+ username +'/'+ oldPassword +'/'+ newPassword);
    }

    getById(username){
        return axios.get(Login_API_BASE_URL + '/users'+'/'+username);
    }
}

export default new LoginService();
