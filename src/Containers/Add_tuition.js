import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaddtuition from '../Components/Body/Bodyaddtuition';
import Footer from '../Components/Footer';


class Add_tuition extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Bodyaddtuition/>
                <Footer/>
            </div>
        );
    }
}

export default Add_tuition;