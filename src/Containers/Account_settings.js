import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaccount from '../Components/Body/Bodyaccount';
import Footer from '../Components/Footer';



class Account_settings extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          country:'',
          firstName:'',
          lastName:'',
          otherName:'',
          address:'',
          country:'',
          nationality:'',
          raceName:'',
          gender:'',
          religion:'',
          email:'',
          CurrentAcademicLevel:'',
          city:'',
          dateOfBirth:'',
          language:'',
          id:''
            
        }
      }

      componentDidMount() {
          this.setState({
              id:this.props.match.params.id
          })          
      }
      


    // getData = (country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth) => {         
    //     const headers = {
    //         "Accept": "application/json",
    //         "Content-type": "application/json",
    //         "Authorization": "Bearer " + localStorage.getItem('jwt')
    //     }
    // }  

    render() {
        return (
            <div>
                <Header/>
                <Bodyaccount passdata={this.state.id} getData={(country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth) => this.getData(country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth)}/>
                <Footer/>
            </div>
           
        );
    }
}

export default Account_settings;