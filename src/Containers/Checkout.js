import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodycheckout from '../Components/Body/Bodycheckout';
import Footer from '../Components/Footer';
import { Redirect} from 'react-router-dom';


class Checkout extends Component {
    render() {
        const isLogged = localStorage.getItem('signJwt');

        if (!isLogged) {
            return (
                <Redirect to="/" />
            )
        }
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