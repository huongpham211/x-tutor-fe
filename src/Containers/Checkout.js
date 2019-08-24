import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodycheckout from '../Components/Body/Bodycheckout';
import Footer from '../Components/Footer';
import { Redirect} from 'react-router-dom';
import axios from '../axios';

class Checkout extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            idcourse : this.props.match.params.id,
        }
    }
    
 

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
                <Bodycheckout idcourse={this.state.idcourse}/>
                <Footer/>
            </div>
        );
    }
}

export default Checkout;