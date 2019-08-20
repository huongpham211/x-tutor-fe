import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import Bodypage from '../Components/Body/Bodypage';
import Footer from '../Components/Footer';
import axios from '../axios';
import Data from '../Containers/Data.json';
import { Redirect} from 'react-router-dom';


class Page extends Component {
   constructor(props, context) {
       super(props, context);
       this.state = {
        id : this.props.match.params.id,
        rolesId:null,
        data:Data,
        loggedin:''
        // dataDb:''
    }
   }

   
   
 
   
   componentDidMount(){
    var config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
    };
       axios
       .get(`api/v1/users/${this.state.id}`,config)
        .then((response) =>{
           
            this.setState({
                rolesId:response.data.userFound.rolesId
            })
        })
        .catch(err =>console.log(err));
           
    }
   
   showheader = () => {
       if(this.state.rolesId === 'Tutor'){
           return <Headertutor
           passdata={this.state.id}
           test={this.state.dataDb}
           checkConnectProps={(dl) => this.props.checkConnectProps(dl)}
           filterFunction={(coursename,tutor) => this.props.filterFunction(coursename,tutor)} 
           />
       }
       else {
           return <Header
           passdata={this.state.id}
            checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
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
                {this.showheader()}
                <Bodypage
                passdata={this.state.id}  
                dataCourseProps={this.state.data} />
                <Footer/>
            </div>
        );
    }
}

export default Page;

