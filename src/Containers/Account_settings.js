import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaccount from '../Components/Body/Bodyaccount';
import Footer from '../Components/Footer';
import axios from '../axios';



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
      


    getData = (country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth,language) => {         
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        
        
        axios
        .put(`api/v1/users/${this.state.id}`,{
            country:country,
            firstName:firstName,
            lastName:lastName,
            otherName:otherName,
            address:address,
            nationality:nationality,
            raceName:raceName,
            gender:gender,
            religion:religion,
            email:email,
            CurrentAcademicLevel:CurrentAcademicLevel,
            city:city,
            dateOfBirth:dateOfBirth,
            language:language
        },config)
        .then((response) =>{
            console.log(response.data);   
        })
        .catch(err => console.log(err));
    }  

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