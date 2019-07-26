import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypage from '../Components/Body/Bodypage';
import Footer from '../Components/Footer';


class Page extends Component {
   
        
    
    render() {
        // console.log(this.props.dataCourseProps);


        return (
            <div>
                <Header
                checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
                <Bodypage dataCourseProps={this.props.dataCourseProps}/>
                <Footer/>
            </div>
        );
    }
}

export default Page;