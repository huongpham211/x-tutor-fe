import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypassword from '../Components/Body/Bodypassword';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';
import { Redirect} from 'react-router-dom';

class Change_password extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:this.props.match.params.id,  
            rolesId:null,
            oldPassword:'',
            newPassword:''
        }
    }
    

    changePassword(oldPassword,newPassword,confirmNewPassword){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        if(newPassword !== confirmNewPassword){
            alert("Passwords don't match");
        } else {
            axios
            .patch(`api/v1/users/password`,{
                oldPassword:oldPassword,
                newPassword:newPassword
            },config)
            .then((response) =>{
                console.log(response.data);             
            })
            .catch(err => console.log(err));
        }       
    }

    componentWillMount(){
      
           axios
           .get(`api/v1/users/${this.state.id}`)
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
               <Bodypassword changePassword={(oldPassword,newPassword,confirmNewPassword) => this.changePassword(oldPassword,newPassword,confirmNewPassword)} passdata={this.state.id}/>
               <Footer/>
            </div>
        );
    }
}

export default Change_password;