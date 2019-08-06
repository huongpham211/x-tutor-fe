import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypassword from '../Components/Body/Bodypassword';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';


class Change_password extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:this.props.match.params.id,  
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
    

    render() {
        return (
            <div>
                 {this.showheader()}
               <Bodypassword passdata={this.state.id}/>
               <Footer/>
            </div>
        );
    }
}

export default Change_password;