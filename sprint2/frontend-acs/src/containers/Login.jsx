import { Component } from "react";
import LoginService from "../service/LoginService";

class Login extends Component {
  
    constructor(props){
      super(props);
     this.state ={
            id:this.props.match.params.id,
            username:'',
            password:''
     }
    }
   
    validateUser = (e) => {
        e.preventDefault();
        console.log('username => ' + JSON.stringify(this.state.username));
        console.log('password => '+ JSON.stringify(this.state.password));
        LoginService.getById(this.state.username).then( (res) =>{
        let user = res.data;
    
        if(this.state.username===user.username && this.state.password===user.password){
            this.props.history.push('/profile-page');
        }
        else{
            alert("Invalid username/password");
        }
    });
        
    }
    changeUsernameHandler= (event) =>{
        this.setState({username: event.target.value});
    }
    changePasswordHandler= (event) =>{
        this.setState({password: event.target.value});
    }
    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
           < div >
            
             <img src="https://img.icons8.com/android/24/fa314a/circled-left.png"/>  <button type="button" class="btn btn-danger" onClick={this.cancel.bind(this)}>Back</button>
                    <div  className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body"></div>

                                <form>
              
                               <h2>Log in</h2> 
                <hr></hr>
                <div className="form-group">
                <img src="https://img.icons8.com/nolan/64/user.png"/> <label >
                    <h4>Username</h4></label>
                    <input placeholder="username" name="username" className="form-control"
                      value={this.state.username} onChange={this.changeUsernameHandler}></input>
                </div>

                <div className="form-group">
                <img src="https://img.icons8.com/nolan/64/password.png"/>
                    <label><h4>Password</h4></label>
                    <input type="password" placeholder="password" name="password" className="form-control"
                      value={this.state.password} onChange={this.changePasswordHandler}></input>

                     
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label text-left" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={this.validateUser} className="btn btn-success" >Sign in</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                <br></br>
                <p className="forgot-password text-right" >
                     <a href="/about" >Forgot password?</a> 
                   
                </p>
            </form> 
            </div>
            </div>
            </ div>
               
        );
    }
}


export default Login;