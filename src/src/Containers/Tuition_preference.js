import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodytuitionpre from '../Components/Body/Bodytuitionpre';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';

class Tuition_preference extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            aboutMe:'',
            hourlyRate:'',
            id : this.props.match.params.id,
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
    
    pushIntroduction(aboutme,hourlyrate){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        axios
        .patch(`api/v1/users/${this.state.id}/tutor-intro`,{
            aboutMe:aboutme,
            hourlyRate:hourlyrate
        },config)
        .then((response) =>{
            console.log(this.response.data);          
        })
        .catch(err =>console.log(err));
    }

    render() {
       console.log(this.state.id);
       
        return (
            <div>
                 {this.showheader()}
                <Bodytuitionpre pushIntroduction={(aboutme,hourlyrate) => this.pushIntroduction(aboutme,hourlyrate)}/>
                <Footer/>
            </div>
        );
    }
}

export default Tuition_preference;