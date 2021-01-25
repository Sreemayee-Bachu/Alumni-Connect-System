
import './App.css';
import Home from './containers/Home';
import Index from './containers/Index';
import Login from './containers/Login';
import Aboutus from './containers/Aboutus';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './containers/Footer';
import HeaderComponent from './containers/HeaderComponent';
import AddWorkComponent from './components/Work/AddWorkComponent';
import ViewWorkComponent from './components/Work/ViewWorkComponent';
import ListWorkComponent from './components/Work/ListWorkComponent';
import ProfileController from './containers/Profilecontroller';
import ListAllPostComponent from './components/Posts/ListAllPostComponent';
import AddPostComponent from './components/Posts/AddPostComponent';
import ListPostComponent from './components/Posts/ListPostComponent';
import ViewPostComponent from './components/Posts/ViewPostComponent';
import ListAlumniComponent from './components/Alumni/ListAlumniComponent';
import ListAllAlumniComponent from './components/Alumni/ListAllAlumniComponent';
import AddAlumniComponent from './components/Alumni/AddAlumniComponent';
import UpdateAlumniComponent from './components/Alumni/UpdateAlumniComponent';
import ListAllCommentComponent from './components/Comments/ListAllCommentComponent';
import AddCommentComponent from './components/Comments/AddCommentComponent';
import ListCommentComponent from './components/Comments/ListCommentComponent';
import ViewAlumniComponent from './components/Alumni/ViewAlumniComponent';
import ViewAllAlumniComponent from './components/Alumni/ViewAllAlumniComponent';
import ViewCommentComponent from './components/Comments/ViewCommentComponent';
function App() {
 return(
  <div>
    <Router>
      <HeaderComponent/>
      <div className="container">
        <Switch>
        <Route path = "/" exact component={Home}></Route>
                <Route path = "/Home" component={Home}></Route>
                <Route path="/Index" component={Index}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path='/about'component={Aboutus}></Route>
                <Route path="/list-work" component={ListWorkComponent}></Route>
                <Route path = "/view-work/:id" component={ViewWorkComponent}></Route>
                <Route path = "/add-work/:id" component={AddWorkComponent}></Route>
                <Route path = "/profile-page" component={ProfileController}></Route>
                <Route path = "/list-all-posts" component = {ListAllPostComponent}></Route>
                <Route path = "/add-post" component={AddPostComponent}></Route>
                <Route path="/list-post" component={ListPostComponent}></Route>
                <Route path = "/view-post/:id" component={ViewPostComponent}></Route>
                <Route path="/list-alumni" component={ListAlumniComponent}></Route>
                <Route path = "/list-all-alumnis" component = {ListAllAlumniComponent}></Route>
                <Route path = "/add-alumni" component={AddAlumniComponent}></Route>
                <Route path = "/update-alumni/:id" component={UpdateAlumniComponent}></Route>
                <Route path = "/list-all-comments" component = {ListAllCommentComponent}></Route>
                <Route path = "/add-comment" component={AddCommentComponent}></Route>
                <Route path="/list-comment" component={ListCommentComponent}></Route>
                <Route path = "/view-comment/:id" component={ViewCommentComponent}></Route>
                <Route path = "/view-all-alumnis" component = {ViewAllAlumniComponent}></Route>
                <Route path = "/view-alumni/:id" component = {ViewAlumniComponent}></Route>
        </Switch>
      </div>
      <br></br>
      <Footer/>   
    </Router>
  </div>
 );
}

export default App;
