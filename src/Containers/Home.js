import React, { Component } from 'react';
import Headerhome from '../Components/Header/Headerhome';
import Bodyhome from '../Components/Body/Bodyhome';
import Footer from '../Components/Footer';
import { Redirect} from 'react-router-dom';
import axios from '../axios';
import config from '../config';


class Home extends Component {
    
    componentWillMount() {
        const isLogged = localStorage.getItem('signJwt');
        if (isLogged !== null) {
            return (
                <Redirect to={this.props.history.goBack()} />
            )
        }
    }
    
    render() {
      
        return (
            <div>
                <Headerhome />
                <Bodyhome
                onSignUp={(signUpUsername,signUpPassword,signUpEmail,signUpRole) => this.props.onSignUp(signUpUsername,signUpPassword,signUpEmail,signUpRole)}/>
                <Footer/>     
            </div>
        );
    }
}

export default Home;