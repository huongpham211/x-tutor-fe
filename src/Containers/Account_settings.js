import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaccount from '../Components/Body/Bodyaccount';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';
import { Redirect} from 'react-router-dom';


class Account_settings extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          country:'',
          firstName:'',
          lastName:'',
          otherName:'',
          address:'',
          nationality:'',
          raceName:'',
          gender:'',
          religion:'',
          email:'',
          CurrentAcademicLevel:'',
          city:'',
          dateOfBirth:'',
          language:'',
          iduser:this.props.match.params.id,
          photo:'',
          rolesId:null
            
        }
      }

  

      componentWillMount(){
      
           axios
           .get(`api/v1/users/${this.state.iduser}`)
            .then((response) =>{
               
                this.setState({
                    rolesId:response.data.userFound.rolesId,
                    avatar:response.data.userFound.avatar,
                    firstName:response.data.userFound.firstName,
                    lastName:response.data.userFound.lastName,
                })
            })
            .catch(err =>console.log(err))
       }
       
       showheader = () => {
           if(this.state.rolesId === 'Tutor'){
               return <Headertutor
               iduser={this.state.iduser}
               passdata={this.state.id}
               checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
           else {
               return <Header
               iduser={this.state.iduser}
               passdata={this.state.id}
                checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
       }
            

     
    updateAvatar(e){
        
      
        var config = {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('signJwt'),
            }          
        };
        const formData = new FormData();
        formData.append('avatar',e);
        console.log('avatar nhan duoc la ' + formData);
        axios
        .patch(`api/v1/users/${this.state.iduser}/avatar`,formData,config)
        .then((response) =>{
            console.log(response.data);  
        })
        .catch(err =>console.log(err));
        
    }

    getData = (country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth,language) => {         
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };                
        axios
        .put(`api/v1/users/${this.state.iduser}`,{
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
        const isLogged = localStorage.getItem('signJwt');

        if (!isLogged) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div>
                {this.showheader()}
                <Bodyaccount firstName={this.state.firstName} lastName={this.state.lastName} avatar={this.state.avatar} passAvatar={(e) => this.updateAvatar(e)} iduser={this.state.iduser} getData={(country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth) => this.getData(country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth)}/>
                <Footer/>
            </div>
           
        );
    }
}

export default Account_settings;