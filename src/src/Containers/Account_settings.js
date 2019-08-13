import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaccount from '../Components/Body/Bodyaccount';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';



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
          id:this.props.match.params.id,
          photo:'',
          rolesId:null
            
        }
      }

  

      componentWillMount(){
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
            .catch(err =>console.log(err))
       }
       
       showheader = () => {
           if(this.state.rolesId === 'Tutor'){
               return <Headertutor 
               passdata={this.state.id}
               checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
           else {
               return <Header
               passdata={this.state.id}
                checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
       }
            

     
    updateAvatar(e){
      
        var config = {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('signJwt'),
                'content-type': 'multipart/form-data'
            }          
        };
        const formData = new FormData();
        formData.append('myImage',e);
        // console.log('avatar nhan duoc la ' + e.name);
        axios
        .patch(`api/v1/users/${this.state.id}/avatar`,formData,config)
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
                {this.showheader()}
                <Bodyaccount passAvatar={(e) => this.updateAvatar(e)} passdata={this.state.id} getData={(country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth) => this.getData(country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth)}/>
                <Footer/>
            </div>
           
        );
    }
}

export default Account_settings;