import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect,BrowserRouter  } from "react-router-dom";
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
import setAuthorizationToken from './setAuthorizationToken';
import config from './config';
import history from './history';

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
      loggedIn:false
    }
    this.onSignUp = this.onSignUp.bind(this);
    this.onLogin = this.onLogin.bind(this);
    
  };

 



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
  const loggedIn = this.state.loggedIn;
  
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
          <Route path={"/account_setting/:id"} component={Account_settings} />
          <Route path={"/change_password/:id"} component={Change_password} />
          <Route path={"/payment_info/:id"} component={Payment_method} />
          <Route path="/add_tuition" component={Add_Tuition} />
          <Route path="/tuition_preference" component={Tuition_preference} />
          <Route path="/tuitor_profile" component={Tuitor_profile} />
          <Route path="/mycalendar" component={Selectable} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router >

    );
  }
}


export default App;


