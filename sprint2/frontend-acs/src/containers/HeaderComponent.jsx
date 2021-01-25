import React, { Component } from 'react';
import {BrowserRouter as Link}from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }

    }
    render() {
        const userlinks=(
            <>
            <ul className="menu-ul">
            <li className="ab" ><Link to="/" >Home</Link></li>
            <li className="ab" ><Link to="/Index" >Index</Link></li>
            <li className="ab" ><Link to="/login" >login</Link></li>

             </ul> 
             </>
        );
        const guestlink=(
            <>
            <ul className="menu-ul">
            <li className="ab" ><Link to="/" >Home</Link></li>
            <li className="ab" ><Link to="/Index" >Index</Link></li>
            <li className="ab" ><Link to="/login" >login</Link></li>

         </ul> 
         </>
        )
        return (
           
            
            <div className="header">
                <img className="logo" src="https://img.icons8.com/dusk/64/000000/graduation-cap.png" 
                    />
          </div>
        
        );
    }
}

export default HeaderComponent;
