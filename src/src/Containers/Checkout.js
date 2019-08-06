import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodycheckout from '../Components/Body/Bodycheckout';
import Footer from '../Components/Footer';


class Checkout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Bodycheckout/>
                <Footer/>
            </div>
        );
    }
}

export default Checkout;