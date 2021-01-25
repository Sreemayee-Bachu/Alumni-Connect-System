import React, { Component } from 'react';

class Aboutus extends Component 
{
    constructor(props){
        super(props)
 
         this.state={
 
         }
        this.changethree=this.changethree.bind(this);
    }
 
    changethree(){
     this.props.history.push('/Home');
 
   }
     render() {
         return (            
            
                <div>
 
                    <img src="https://img.icons8.com/android/24/fa314a/circled-left.png"/>  <button type="button" class="btn btn-danger" onClick={this.changethree}>Back</button>
          <hr/>
                <h1 class="text-center">OUR TEAM</h1>
                <br/>
 
     
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                               <div class="our-team-main">
                                    <div class="team-front">
                                        <img src="https://img.icons8.com/officel/50/000000/change-user-female.png"/>
                                        <h3>Sreemayee Bachu</h3>
                                        <p>Admin Module</p>
                                    </div>
                                </div>
                            </div>      
                                <br/><br/>
                                <div class="col-lg-4">
                                    <div class="our-team-main">
                                        <div class="team-front">
                                            <img src="https://img.icons8.com/officel/50/000000/change-user-female.png"/>
                                            <h3>Aasritha Bandaru</h3>
                                            <p>Alumni module</p>
                                        </div>
                                    </div>
                                </div>
 
                                <div class="col-lg-4">
                                     <div class="our-team-main">
 
                                        <div class="team-front">
                                        <img src="https://img.icons8.com/officel/50/000000/change-user-female.png"/>
                                        <h3>Gayathri Maku</h3>
                                        <p>Post Module</p>
                                    </div>
 
                                </div>
                            </div>
 
                            <div class="col-lg-4">
                                <div class="our-team-main">
 
                                    <div class="team-front">
                                        <img src="https://img.icons8.com/officel/50/000000/change-user-female.png"/>
                                        <h3> Akhila Reddy Enukonda</h3>
                                        <p>Comment Module</p>
                                    </div>
 
                                </div>
                            </div>
 
                            <div class="col-lg-4">
                                <div class="our-team-main">
 
                                    <div class="team-front">
                                        <img src="https://img.icons8.com/officel/50/000000/change-user-female.png"/>
                                        <h3>Shivani Nimma Bukka</h3>
                                        <p>Work Module</p>
                                    </div>
 
                                </div>
                            </div>
 
 
                        </div>
                    </div>
                </div>
             
         );
     }
 }
 
 
            
export default Aboutus