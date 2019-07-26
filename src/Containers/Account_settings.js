import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaccount from '../Components/Body/Bodyaccount';
import Footer from '../Components/Footer';



class Account_settings extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Bodyaccount/>
                <Footer/>
            </div>
           
        );
    }
}

export default Account_settings;