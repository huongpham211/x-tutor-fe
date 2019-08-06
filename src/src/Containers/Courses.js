import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodycourses from '../Components/Body/Bodycourses';
import Footer from '../Components/Footer';


class Courses extends Component {
    render() {
        return (
            <div>
                <Header checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
                <Bodycourses dataCourseProps={this.props.dataCourseProps}/>
                <Footer/>
            </div>
        );
    }
}

export default Courses;