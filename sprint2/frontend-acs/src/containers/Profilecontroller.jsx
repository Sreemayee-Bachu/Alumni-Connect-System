import { Component } from "react";

class ProfileController extends Component{
    constructor(props){
        super(props)
        this.state={

        }
        this.changeTimeline=this.changeTimeline.bind(this);
        this.changeViewHandler=this.changeViewHandler.bind(this);
        this.changeAddworkHandler=this.changeAddworkHandler.bind(this);
        this.changeEditHandler=this.changeEditHandler.bind(this);
    }
    
changeAddworkHandler(){
    this.props.history.push('/list-work');
}
changeViewHandler(){
    this.props.history.push('/view-all-alumnis');
}
changeEditHandler(){
    this.props.history.push('/update-alumni/${id}');
}
changeTimeline(){
    this.props.history.push('/list-post');
}
    render() {
        return (
            <div>
                <button type="button" id="close" class="btn btn-light"  onClick={this.changethree}>Logout</button>
                <img src="https://img.icons8.com/windows/32/fa314a/logout-rounded-up.png"/>
                <div className="container">
                    <h2 className="text-center">Alumni Profile Page</h2> 
                    <div className='row'>
                        <table className = "table table-dark table-hover">
                            <tbody>
                                { 
                                 <tr>
                                    <td>
                                        <button  onClick={this.changeTimeline}className="btn btn-info">View Timeline</button>
                                    </td>
                                    <td>
                                        <button onClick={this.changeViewHandler} className="btn btn-info">View Friends</button>
                                    </td>
                                    <td>
                                        <button onClick={this.changeAddworkHandler} className="btn btn-info">View Work</button>
                                    </td>
                                    <td>
                                        <button onClick={this.changeEditHandler} className="btn btn-info">Edit Profile</button>
                                    </td>  
                                    </tr>

                                    
                                }
                            </tbody>
                        </table>
                   </div>
                </div>
            </div>
        );
    }
}
export default ProfileController