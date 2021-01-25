import { Component } from "react";
import AlumniService from "../../service/AlumniService";

class AddAlumniComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,
            alumni_id:'',
            alumniname:'',
            stream:'',
            yearOfPassing:'',
            phone:'',
            email:''
        }
    }
   
    saveOrUpdateAlumni =(e)=>{
        e.preventDefault();
        const alumni = {
            alumni_id: this.state.alumni_id, name: this.state.name,stream: this.state.stream,yearOfPassing: this.state.yearOfPassing,phone:this.state.yop,email:this.state.email};
        console.log("alumni =>"+ JSON.stringify(alumni));
        AlumniService.addAlumni(alumni).then(res =>{
            this.props.history.push('/profile-page');
        });
          
    };
    changeAlumniIdHandler =(event)=>{
        this.setState({alumni_id: event.target.value})
    }
    changeNameContentHandler =(event)=>{
        this.setState({alumniname: event.target.value})
    }
    changeStreamHandler =(event)=>{
        this.setState({stream: event.target.value})
    }
    changeYopHandler =(event)=>{
        this.setState({yearOfPassing: event.target.value})
    }
    changeEmailIdHandler =(event)=>{
        this.setState({email: event.target.value})
    }
    changePhoneHandler =(event)=>{
        this.setState({phone: event.target.value})
    }
    cancel(){
        this.props.history.push('/profile-page');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div  className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Add Alumni</h3>
                             <div className="card-body">
                             <form>
                                 <div className="form-group">
                                         <label> Alumni Id: </label>
                                         <input placeholder="alumni_id " name="alumni_id " className="form-control"
                                                value={this.state.alumniId} onChange={this.changeAlumniIdHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label> Name:</label>
                                         <input placeholder="alumniname " name="alumniname " className="form-control"
                                                value={this.state.alumniname} onChange={this.changeNameContentHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label>Stream:</label>
                                         <input placeholder="stream" name="stream " className="form-control"
                                                value={this.state.stream} onChange={this.changeStreamHandler}></input>
                                     </div>
                                     
                                     <div className="form-group">
                                         <label> Year Of Passing:</label>
                                         <input placeholder="yearOfPassing " name="yearOfPassing" className="form-control"
                                                value={this.state.yearOfPassing} onChange={this.changeYopHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label> Phone:</label>
                                         <input placeholder="phone " name="phone" className="form-control"
                                                value={this.state.phone} onChange={this.changePhoneHandler}></input>
                                     </div>
                                     <div className="form-group">
                                         <label> Email Id:</label>
                                         <input placeholder="email " name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeEmailIdHandler}></input>
                                     </div>
                                     <button className="btn btn-success" onClick={this.saveOrUpdateAlumni}>Add</button>
                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                 </form>
                             </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
export default AddAlumniComponent