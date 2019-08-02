import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypassword from '../Components/Body/Bodypassword';
import Footer from '../Components/Footer';


class Change_password extends Component {
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
               <Bodypassword passdata={this.state.id}/>
               <Footer/>
            </div>
        );
    }
}

export default Change_password;