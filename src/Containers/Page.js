import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import Bodypage from '../Components/Body/Bodypage';
import Footer from '../Components/Footer';
import axios from '../axios';
import { Redirect} from 'react-router-dom';


class Page extends Component {
   constructor(props, context) {
       super(props, context);
       this.state = {
        iduser : this.props.match.params.id,
        rolesId:null,
        loggedin:''
        // dataDb:''
    }
   }

   
   
 
   
   componentDidMount(){
   
       axios
       .get(`api/v1/users/${this.state.iduser}`)
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
           iduser={this.state.iduser}
           test={this.state.dataDb}
           checkConnectProps={(dl) => this.props.checkConnectProps(dl)}
         
           />
       }
       else {
           return <Header
           iduser={this.state.iduser}
            checkConnectProps={(dl) => this.props.checkConnectProps(dl)}
           />
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
                iduser={this.state.iduser}  
                dataCourseProps={this.state.data} />
                <Footer/>
            </div>
        );
    }
}

export default Page;

