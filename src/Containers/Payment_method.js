import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypayment from '../Components/Body/Bodypayment';
import Footer from '../Components/Footer';

class Payment_method extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:this.props.match.params.id
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Bodypayment passdata={this.state.id}/>
                <Footer/>
            </div>
        );
    }
}

export default Payment_method;