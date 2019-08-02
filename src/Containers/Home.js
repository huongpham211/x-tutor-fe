import React, { Component } from 'react';
import Headerhome from '../Components/Header/Headerhome';
import Bodyhome from '../Components/Body/Bodyhome';
import Footer from '../Components/Footer';


class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            loggedIn:''
        }
    }

   
    
    render() {
        return (
            <div>
                <Headerhome />
                <Bodyhome  onLogin={(signInPassword,signInUsername) => this.props.onLogin(signInPassword,signInUsername)}
                onSignUp={(signUpUsername,signUpPassword,signUpEmail,signUpRole) => this.props.onSignUp(signUpUsername,signUpPassword,signUpEmail,signUpRole)}/>
                <Footer/>     
            </div>
        );
    }
}

export default Home;