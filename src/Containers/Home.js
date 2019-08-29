import React, { Component } from 'react';
import Headerhome from '../Components/Header/Headerhome';
import Bodyhome from '../Components/Body/Bodyhome';
import Footer from '../Components/Footer';
import { Redirect} from 'react-router-dom';
import axios from '../axios';
// import FadeIn from "react-fade-in";
// import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
// import "bootstrap/dist/css/bootstrap.css";

class SplashScreen extends React.Component {
    render() {
     
  
      return (
        <div className="testthu">
      <h5>Wait a moment while we load your app.</h5>
        <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
      );
    }
  }



class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            renderSplashscreen: true
        }
    }
    
    componentDidMount() {
        axios
        .get(`api/v1/users`)
        .then((response) =>{
            this.setState({
                renderSplashscreen:false
            });
        })
    }
    
    
    componentWillMount() {
        const isLogged = localStorage.getItem('signJwt');
        if (isLogged !== null) {
            return (
                <Redirect to={this.props.history.goBack()} />
            )
        }
    }
    
    render() {
        if(this.state.renderSplashscreen)
        return <SplashScreen/>;
      else

      
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