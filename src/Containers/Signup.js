import React, { Component } from 'react';
import axios from '../axios';

class Signup extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpUsername: '',
            signUpRole: ''

        }
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpRole = this.onTextboxChangeSignUpRole.bind(this);
    }

    onTextboxChangeSignUpPassword(event) {
        // console.log(event.target.value);
        this.setState({
            signUpPassword: event.target.value
        })
    }

    onTextboxChangeSignUpUsername(event) {
        // console.log(event.target.value);
        this.setState({
            signUpUsername: event.target.value
        });
    }

    onTextboxChangeSignUpEmail(event) {
        // console.log(event.target.value);
        this.setState({
            signUpEmail: event.target.value
        });
    }

    onTextboxChangeSignUpRole(event) {
        // console.log(event.target.value);
        this.setState({
            signUpRole: event.target.value
        });
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
    

    render() {
        return (
            <div className="bglogin1">
                <form action="" className="login-form1">
                    <h1>Sign up</h1>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                    <div className="txtb">
                        <input type="text" onChange={(event) => this.onTextboxChangeSignUpUsername(event)} />
                        <span data-placeholder="Username" />
                    </div>
                    <div className="txtb">
                        <input type="text" onChange={(event) => this.onTextboxChangeSignUpEmail(event)} />
                        <span data-placeholder="Email" />
                    </div>
                    <div className="txtb">
                        <input type="text" onChange={(event) => this.onTextboxChangeSignUpRole(event)} />
                        <span data-placeholder="Role" />
                    </div>
                    <div className="txtb">
                        <input type="password" onChange={(event) => this.onTextboxChangeSignUpPassword(event)} />
                        <span data-placeholder="Password" />
                    </div>
                    <div className="condition">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <h5>I agree to the<span>Terms and Conditions</span></h5>
                    </div>
                    <input type="submit" className="logbtn" value="Sign up" onClick={(signUpUsername, signUpPassword, signUpEmail, signUpRole) => this.onSignUp(this.state.signUpUsername, this.state.signUpPassword, this.state.signUpEmail, this.state.signUpRole)} />
                    <div className="bottom-text">
                        Have already account ? <a href="/login">Login here</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;