import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypage from '../Components/Body/Bodypage';
import Footer from '../Components/Footer';



class Page extends Component {
   constructor(props, context) {
       super(props, context);
       this.state = {
        id : this.props.match.params.id
    }
   }


   
        
    
    render() {
        // console.log(this.props.dataCourseProps);


        return (
            <div>
                <Header
                passdata={this.state.id}
                checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
                <Bodypage  dataCourseProps={this.props.dataCourseProps} />
                <Footer/>
            </div>
        );
    }
}

export default Page;

