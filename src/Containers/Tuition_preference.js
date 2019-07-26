import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodytuitionpre from '../Components/Body/Bodytuitionpre';
import Footer from '../Components/Footer';

class Tuition_preference extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Bodytuitionpre/>
                <Footer/>
            </div>
        );
    }
}

export default Tuition_preference;