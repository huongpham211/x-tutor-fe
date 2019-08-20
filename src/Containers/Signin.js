import React, { Component } from 'react';
import axios from '../axios';
import config from '../config';
import { Redirect} from 'react-router-dom';

class Signin extends Component {
    constructor(props, context) {
        super(props, context);
          this.state = {
            isLoading: true,
            token: '',
            signInUsername: '',
            signInPassword: '',
        };
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignInUsername = this.onTextboxChangeSignInUsername.bind(this);
    }

    onTextboxChangeSignInUsername = (event) => {
        // console.log(event.target.value);
        this.setState({
            signInUsername: event.target.value
        });
    }

    onTextboxChangeSignInPassword(event) {
        // console.log(event.target.value);
        this.setState({
            signInPassword: event.target.value
        });
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
              id:response.data.userFound._id,
              loggedIn:true
            })
            // const id = this.state.id
            // //set token
            // history.push(`/page/${id}`);
            // console.log(response.data)
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
    
          })
          .catch(err => console.log(err.response));
      }


    render() {
        if(this.state.loggedIn === true){
            return <Redirect to={`/page/${this.state.id}`} />
        }
        return (
            <div className="bglogin">
                <form action="" className="login-form">
                    <h1>Login</h1>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                    <div className="txtb">
                        <input id="" type="text" onChange={(event) => this.onTextboxChangeSignInUsername(event)} />
                        <span data-placeholder="Username" />
                    </div>
                    <div className="txtb">
                        <input id="" type="password" onChange={(event) => this.onTextboxChangeSignInPassword(event)} />
                        <span data-placeholder="Password" />
                    </div>
                    <input type="submit" className="logbtn" value="Login" onClick={(signInPassword, signInUsername) => this.onLogin(this.state.signInPassword, this.state.signInUsername)} />
                    <div className="bottom-text">
                        Don't have account? <a href="/signup">Sign up</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;