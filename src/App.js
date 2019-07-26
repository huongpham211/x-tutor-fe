import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from './axios';

import Account_settings from './Containers/Account_settings';
import Home from './Containers/Home';
import Page from './Containers/Page';
import Change_password from './Containers/Change_password';
import Payment_method from './Containers/Payment_method';
import Add_Tuition from './Containers/Add_tuition';
import Tuition_preference from './Containers/Tuition_preference';
import Tuitor_profile from './Containers/Tuitor_profile';
import Selectable from './Containers/Selectable';
import Checkout from './Containers/Checkout';
import Data from './Containers/Data.json';
import Courses from './Containers/Courses';


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
      signUpEmail: '',
      signUpPassword: '',
      signUpUsername: '',
      signUpRole: '',
      signInPassword: '',
      signInUsername: ''
    }
  }

 


  contentSearch = (dl) => {
    this.setState({
      searchText: dl
    })
    console.log('du bo lieu nhan duoc la ' + this.state.searchText);
  }

  onSignUp = (signUpUsername,signUpPassword,signUpEmail,signUpRole) => {
    // console.log('signup username la ' + signUpUsername);
    // console.log('signup password la ' + signUpPassword);
    // console.log('signup email la ' + signUpEmail);
    // console.log('signup role la ' + signUpRole);
    this.setState({
      signUpUsername:signUpUsername,
      signUpPassword:signUpPassword,
      signUpEmail:signUpEmail,
      signUpRole:signUpRole
    })
    axios
    .post('api/v1/users', {
      signUpUsername: this.state.signUpUsername,
      signUpPassword: this.state.signUpPassword,
      signUpEmail: this.state.signUpEmail,
      signUpRole: this.state.signUpRole
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(err => console.log(err));
  }


  onLogin = (signInPassword, signInUsername) => {
    this.setState({
      signInPassword: signInPassword,
      signInUsername: signInUsername
    })
    // console.log('du lieu password nhan duoc la ' + this.state.signInUsername );
    // console.log('du lieu username nhan duoc la ' + this.state.signInPassword );
    axios
      .post('api/v1/login', {
        signInUsername: this.state.signInUsername,
        signInPassword: this.state.signInPassword
      })
      .then(response =>
        this.setState({
          signInUsername: response.data.user.username,
          signInPassword: response.data.user.password
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.course_name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1) {
        ketqua.push(item);
      }
    })
    // console.log(ketqua);

    return (
      <Router>
        <div>
          <Route exact path="/" render={(props) =>
            <Home
              {...props}
              onLogin={(signInPassword, signInUsername) => this.onLogin(signInPassword, signInUsername)}
              onSignUp={(signUpUsername,signUpPassword,signUpEmail,signUpRole) =>this.onSignUp(signUpUsername,signUpPassword,signUpEmail,signUpRole)}
            />
          } />
          <Route path="/page" render={(props) =>
            <Page
              {...props}
              checkConnectProps={(dl) => this.contentSearch(dl)}
              dataCourseProps={this.state.data}
            />
          } />
          <Route path="/courses" render={(props) =>
            <Courses
              {...props}
              checkConnectProps={(dl) => this.contentSearch(dl)}
              dataCourseProps={ketqua}
            />
          } />
          <Route path="/account_setting" component={Account_settings} />
          <Route path="/change_password" component={Change_password} />
          <Route path="/payment_info" component={Payment_method} />
          <Route path="/add_tuition" component={Add_Tuition} />
          <Route path="/tuition_preference" component={Tuition_preference} />
          <Route path="/tuitor_profile" component={Tuitor_profile} />
          <Route path="/mycalendar" component={Selectable} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>

    );
  }
}


export default App;


