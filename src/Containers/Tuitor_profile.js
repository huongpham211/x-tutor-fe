import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodytuitorprofile from '../Components/Body/Bodytuitorprofile';
import Footer from '../Components/Footer';

class Tuitor_profile extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Bodytuitorprofile/>
                <Footer/>
            </div>
        );
    }
}

export default Tuitor_profile;