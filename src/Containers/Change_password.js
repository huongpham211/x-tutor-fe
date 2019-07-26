import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypassword from '../Components/Body/Bodypassword';
import Footer from '../Components/Footer';


class Change_password extends Component {
    render() {
        return (
            <div>
               <Header/>
               <Bodypassword/>
               <Footer/>
            </div>
        );
    }
}

export default Change_password;