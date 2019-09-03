import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account_settings from './Containers/Account_settings';
import Home from './Containers/Home';
import Page from './Containers/Page';
import Change_password from './Containers/Change_password';
import Payment_method from './Containers/Payment_method';
import Add_Tuition from './Containers/Add_tuition';
import Tutor_preference from './Containers/Tutor_preference';
import Tuitor_profile from './Containers/Tutor_profile';
import Selectable from './Containers/Selectable';
import Checkout from './Containers/Checkout';
import Data from './Containers/Data.json';
import Courses from './Containers/Courses';
import history from './history';
import Infocard from './Containers/Infocard';
import UpdateCard from './Containers/UpdateCard';
import FilterCourses from './Containers/FilterCourses';
import Login from './Containers/Signin';
import Signup from './Containers/Signup';
import Filter from './Containers/Filter';
import Bill from './Containers/Bill';
import axios from './axios';
import Infotuition from './Containers/Infotuition';
import Test from './Containers/Test';
import About from './Containers/About';

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
        if((item.firstName + item.lastName).toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 || item.tutorData.teachingSubject.forEach((value) =>{
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
          <Route path="/tuition_preference/:id" component={Tutor_preference} />
          <Route path="/infotuition/:id" component={Infotuition} />
          <Route path={"/tutor_profile/:id"} component={Tuitor_profile} />
          <Route path={"/mycalendar/:id"} component={Selectable} />
          <Route path={"/checkout/:id"} component={Checkout} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/aboutus" component={About} />
          <Route path={"/bill/:id"} component={Bill} />
          <Route path={"/test/:id"} component={Test} />
        </div>
      </Router >

    );
  }
}


export default App;


