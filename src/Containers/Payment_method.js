import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypayment from '../Components/Body/Bodypayment';
import Footer from '../Components/Footer';

class Payment_method extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Bodypayment/>
                <Footer/>
            </div>
        );
    }
}

export default Payment_method;