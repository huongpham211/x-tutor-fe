import React, { Component } from 'react';
import Headerhome from '../Components/Header/Headerhome';
import Bodyaboutus from '../Components/Body/Bodyaboutus';
import Footer from '../Components/Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Headerhome/>
                <Bodyaboutus/>
                <Footer/>
            </div>
        );
    }
}

export default About;