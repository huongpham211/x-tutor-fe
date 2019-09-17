import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from './axios';
const Account_settings = React.lazy(() => import('./Containers/Account_settings'));
const Home = React.lazy(() => import('./Containers/Home'));
const Page = React.lazy(() => import('./Containers/Page'));
const Change_password = React.lazy(() => import('./Containers/Change_password'));
const Payment_method = React.lazy(() => import('./Containers/Payment_method'));
const Add_Tuition = React.lazy(() => import('./Containers/Add_tuition'));
const Tuitor_profile = React.lazy(() => import('./Containers/Tutor_profile'));
const Selectable = React.lazy(() => import('./Containers/Selectable'));
const Checkout = React.lazy(() => import('./Containers/Checkout'));
const Courses = React.lazy(() => import('./Containers/Courses'));
const Infocard = React.lazy(() => import('./Containers/Infocard'));
const Tutor_preference = React.lazy(() => import('./Containers/Tutor_preference'));
const history = React.lazy(() => import('./history'));
const UpdateCard = React.lazy(() => import('./Containers/UpdateCard'));
const FilterCourses = React.lazy(() => import('./Containers/FilterCourses'));
const Login = React.lazy(() => import('./Containers/Signup'));
const Signup = React.lazy(() => import('./Containers/Signup'));
const Filter = React.lazy(() => import('./Containers/Filter'));
const Bill = React.lazy(() => import('./Containers/Bill'));
const Infotuition = React.lazy(() => import('./Containers/Infotuition'));
const About = React.lazy(() => import('./Containers/About'));
const Yourcouses = React.lazy(() => import('./Containers/Yourcourses'));
const Detailcourses = React.lazy(() => import('./Containers/Detailcourses'));
const Coursestutor = React.lazy(() => import('./Containers/Coursestutor'));
// import Account_settings from './Containers/Account_settings';
// import Home from './Containers/Home';
// import Page from './Containers/Page';
// import Change_password from './Containers/Change_password';
// import Payment_method from './Containers/Payment_method';
// import Add_Tuition from './Containers/Add_tuition';
// import Tutor_preference from './Containers/Tutor_preference';
// import Tuitor_profile from './Containers/Tutor_profile';
// import Selectable from './Containers/Selectable';
// import Checkout from './Containers/Checkout';
// import Data from './Containers/Data.json';
// import Courses from './Containers/Courses';
// import history from './history';
// import Infocard from './Containers/Infocard';
// import UpdateCard from './Containers/UpdateCard';
// import FilterCourses from './Containers/FilterCourses';
// import Login from './Containers/Signin';
// import Signup from './Containers/Signup';
// import Filter from './Containers/Filter';
// import Bill from './Containers/Bill';
// import axios from './axios';
// import Infotuition from './Containers/Infotuition';
// import Test from './Containers/Test';
// import About from './Containers/About';
// import Yourcouses from './Containers/Yourcourses';
// import Detailcourses from './Containers/Detailcourses';
// import Coursestutor from './Containers/Coursestutor';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true,
      token: '',
      searchText: '',
      signUpError: '',
      signInError: '',
      id: '',
      dataDb:null,
      coursename:'',
      tutor:''
    }

  };

  componentWillMount(){
    axios
    .get(`api/v1/users/all-tutors`)
     .then((response) =>{ 
         this.setState({
             dataDb:response.data.allTutor
         })
     })
     .catch(err =>console.log(err));
}

iduser(iduser){
  console.log("iduser la :" + iduser)
}

  filterFunction(coursename,tutor) {
    this.setState({
      coursename:coursename,
      tutor:tutor
    })
  
    console.log("du lieu nhan duoc la " + coursename)
    console.log("du lieu nhan duoc la " + tutor)
  }


  contentSearch = (dl) => {
    
    this.setState({
      searchText: dl
    })
    console.log('du bo lieu nhan duoc la ' + this.state.searchText);
  }


  render() {
    console.log(this.state.dataDb)

    var ketqua = [];
    if(this.state.dataDb !==  null){
      this.state.dataDb.map((item) => {
        var name = item.firstName + item.lastName   
        if(name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || item.tutorData.teachingSubject.forEach((value) =>{
          if(value.course.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1){
            ketqua.push(item);
          }
        }))
        // console.log(item);  
        item.tutorData.teachingSubject.forEach((value) =>{
         
        })
      })
    }

    // this.state.data.forEach((item) => {
    //   console.log();
      
    //   // item.forEach((value) =>{
    //   //   if (value.course.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1) {
    //   //     ketqua.push(item);
    //   //   }
    //   // })
    // })


   

    var filter = [];
    if(this.state.dataDb !==  null){
      this.state.dataDb.map((item) => {
        if((item.firstName + item.lastName).toLowerCase().indexOf(this.state.tutor.toLowerCase()) !== -1 && item.tutorData.teachingSubject.forEach((value) =>{
          if(value.course.toLowerCase().indexOf(this.state.coursename.toLowerCase()) !== -1){
            filter.push(item);
          }
        }))
        // console.log(item);  
        item.tutorData.teachingSubject.forEach((value) =>{
         
        })
      })
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
      <Router history={history}>
        <div>

          <Route exact path="/" render={(props) =>
            <Home
              {...props}
              // onLogin={(signInPassword, signInUsername) => this.onLogin(signInPassword, signInUsername)}
              // onSignUp={(signUpUsername, signUpPassword, signUpEmail, signUpRole) => this.onSignUp(signUpUsername, signUpPassword, signUpEmail, signUpRole)}
            />
          } />
          <Route path={`/page/:id`} render={(props) =>
            <Page
              {...props}
              // filterFunction={(coursename,tutor) => this.filterFunction(coursename,tutor)}
              checkConnectProps={(dl) => this.contentSearch(dl)}
              iduser={(iduser) => this.iduser(iduser)}
            />
          } />
          
          <Route path={`/filter/:id`} render={(props) =>
            <Filter
              {...props}
              filterFunction={(coursename,tutor) => this.filterFunction(coursename,tutor)}
            />
          } />

          <Route path={`/courses/:id`} render={(props) =>
            <Courses
              {...props}
              checkConnectProps={this.state.searchText}
              dataCourseProps={ketqua}
            />
          } />
          

          <Route path={`/filter_course/:id`} render={(props) =>
            <FilterCourses
              {...props}
              coursename={(dl) => this.state.coursename}
              tutor={(dl) => this.state.tutor}
              courseFilter={filter}
            />
          } />

          <Route path={"/account_setting/:id"} component={Account_settings} />
          <Route path={"/change_password/:id"} component={Change_password} />
          <Route path={"/payment_info/:id"} component={Infocard} />
          <Route path={"/edit_card/:id"} component={UpdateCard} />
          <Route path={"/create_card/:id"} component={Payment_method} />
          <Route path={`/add_tuition/:id`} render={(props) =>
            <Add_Tuition
              {...props}
              id={this.state.id} 
            />
          } />
        
          <Route path="/tutor_preference/:id" component={Tutor_preference} />
          <Route path="/infotuition/:id" component={Infotuition} />
          <Route path={"/tutor_profile/:id"} component={Tuitor_profile} />
          <Route path={"/mycalendar/:id"} component={Selectable} />
          <Route path={"/checkout/:id"} component={Checkout} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/aboutus" component={About} />
          <Route path={"/bill/:id"} component={Bill} />
          <Route path={"/yourcourses/:id"} component={Yourcouses} />
          <Route path={"/detailcourses/:id"} component={Detailcourses} />
          <Route path={"/coursestutor/:id"} component={Coursestutor} />
          {/* <Route path={"/test/:id"} component={Test} /> */}
        </div>
      </Router >
      </Suspense>
    );
  }
}


export default App;


