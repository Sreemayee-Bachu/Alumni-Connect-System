import React, { Component } from 'react';
import Footer from './Footer';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.changehome=this.changehome.bind(this);
        this.changeAbout=this.changeAbout.bind(this);
        this.changelogin=this.changelogin.bind(this);
    }
    changehome(){
        this.props.history.push('/');
    }
    changeAbout(){
        this.props.history.push('/about');
    }
    changelogin(){
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>
            <div className="container3">
            <div className='a'>
                 <div >
                <marquee> <img src="https://img.icons8.com/ios/50/000000/graduation-scroll.png"/><b>Welcome to Alumni Connect</b>  
                </marquee>
                <button type="button" class="btn btn-primary" onClick={this.changehome}> Home</button><img src="https://img.icons8.com/ios-glyphs/24/000000/home.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <button type="button" class="btn btn-secondary" onClick={this.changeAbout}>About Us</button> <img src="https://img.icons8.com/fluent-systems-filled/24/000000/about-us-male.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <button type="button" class="btn btn-secondary" onClick={this.changelogin}>Login</button><img src="https://img.icons8.com/nolan/64/login-rounded-right.png"/>
            </div>
            </div>
            </div>
            <br/>
                   <br/>
                   <center>
                   <img src="https://i.ibb.co/xC3MGq5/meme-graduation-caps-dm0.png" width="100%" height="100%"></img>
                   </center> 
            </div>
            
           
    
        );
    }
}

export default Home