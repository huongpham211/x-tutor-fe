import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import axios from './axios';
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
import setAuthorizationToken from './setAuthorizationToken';
import config from './config';
import history from './history';
import Infocard from './Containers/Infocard';
import UpdateCard from './Containers/UpdateCard';
import Test from './Containers/Test';
import FilterCourses from './Containers/FilterCourses';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true,
      token: '',
      data: Data,
      searchText: '',
      signUpError: '',
      signInError: '',
      email: '',
      password: '',
      username: '',
      rolesId: '',
      signInPassword: '',
      signInUsername: '',
      loggedIn:false,
      coursename:'',
      tutor:'',
      id:''
    }
    this.onSignUp = this.onSignUp.bind(this);
    this.onLogin = this.onLogin.bind(this);
    
  };

 
  filterFunction(coursename,tutor){
    console.log('dl nhan duoc ' + coursename);
    console.log('dl nhan duoc ' + tutor);
    this.setState({
      coursename:coursename,
      tutor:tutor
    })
  }


  contentSearch = (dl) => {
    this.setState({
      searchText: dl
    })
    // console.log('du bo lieu nhan duoc la ' + this.state.searchText);
  }

  onSignUp = (signUpUsername, signUpPassword, signUpEmail, signUpRole) => {

    const header = {
      'content-type': 'application/json',
    };

    axios
      .post(`api/v1/auth/register`, {
        username: signUpUsername,
        password: signUpPassword,
        email: signUpEmail,
        rolesId: signUpRole
      }, header)
      .then((response) => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }


  onLogin = (signInPassword, signInUsername) => {  
    axios
      .post(`${config.rootPath}/api/v1/auth`, {
        username: signInUsername,
        password: signInPassword
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('signJwt', token);
        this.setState({
          signInUsername: response.data.userFound.username,
          signInPassword: response.data.userFound.password,
          id:response.data.userFound._id
        })
        setAuthorizationToken(token)
        const id = this.state.id
        //set token
        history.push(`/page/${id}`);
        console.log(response.data)
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token

      })
      .catch(err => console.log(err.response));
  }

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.course_name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1) {
        ketqua.push(item);
      }
    })

    var filter = [];
    this.state.data.forEach((items) =>{
      if(items.course_name.toLowerCase().indexOf(this.state.coursename.toLowerCase()) !== -1 && items.tuitor.toLowerCase().indexOf(this.state.tutor.toLowerCase()) !== -1){
        filter.push(items)
      }
    })
  
    return (
      <Router history={history}>
        <div>
          
          <Route exact path="/" render={(props) =>
            <Home
              {...props}
              onLogin={(signInPassword, signInUsername) => this.onLogin(signInPassword, signInUsername)}
              onSignUp={(signUpUsername, signUpPassword, signUpEmail, signUpRole) => this.onSignUp(signUpUsername, signUpPassword, signUpEmail, signUpRole)}
            />
          } />    
          <Route path={`/page/:id`} render={(props) =>
            <Page
              {...props}
              filterFunction={(coursename,tutor) => this.filterFunction(coursename,tutor)}
              checkConnectProps={(dl) => this.contentSearch(dl)}
            />
          } />
          <Route path="/courses" render={(props) =>
            <Courses
              {...props}
              checkConnectProps={(dl) => this.contentSearch(dl)}
              dataCourseProps={ketqua}
            />
          } />
          
          <Route path="/filter_course" render={(props) =>
            <FilterCourses
              {...props}
              checkConnectProps={(dl) => this.contentSearch(dl)}
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
          <Route path={"/tutor_profile/:id"} component={Tuitor_profile} />
          <Route path="/mycalendar" component={Selectable} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/test" component={Test} />
        </div>
      </Router >

    );
  }
}


export default App;


