import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodytuitionpre from '../Components/Body/Bodytutorpre';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';
import { Redirect} from 'react-router-dom';

class Tuition_preference extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tutorData:null,
            aboutMe:'',
            hourlyRate:'',
            iduser : this.props.match.params.id,
            education:[{
            }],
            // major:'',
            // institute:'',
            // certificate:'',
            workingExperience:[{}],
            teachingSubject:[{}],
            basesIn:''
        }
    }

    componentDidMount(){
        
           axios
           .get(`api/v1/users/${this.state.iduser}`)
            .then((response) =>{
               
                this.setState({
                    rolesId:response.data.userFound.rolesId,
                    avatar:response.data.userFound.avatar,
                    firstName:response.data.userFound.firstName,
                    lastName:response.data.userFound.lastName,
                    tutorData:response.data.userFound.tutorData.education
                    
                })
            })
            .catch(err =>console.log(err))
       }
       
       showheader = () => {
           if(this.state.rolesId === 'Tutor'){
               return <Headertutor 
               iduser={this.state.iduser}
               checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
           else {
               return <Header
               iduser={this.state.iduser}
                checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
       }
    
    pushfreetime(periodeStart,periodeEnd,hourStart,hourEnd){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        axios
        .patch(`api/v1/users/${this.state.iduser}/tutor-free-time`,{
            periodeStart:periodeStart,
            periodeEnd:periodeEnd,
            hourStart:hourStart,
            hourEnd:hourEnd
        },config)
        .then((res) =>{
            console.log(res);
        })
        .catch(err => console.log(err))
        
    }


    pushEducation(someinfo){
        console.log(someinfo)
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
     

        axios
        .patch(`api/v1/users/${this.state.iduser}/tutor-reference`,{
           education:someinfo
        },config)
        .then((response) => {
            console.log(response.data);         
        })
        .catch(err => console.log(err));   
    }

    pushworkingExperience(workingexp){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        // var newArray = this.state.pushworkingExperience
        // var itemToBeAdded = {
        //     year:year,
        //     experience:experience
        // }
        // newArray.push(itemToBeAdded)
        // this.setState({workingExperience:newArray});
        axios
        .patch(`api/v1/user/${this.state.iduser}/tutor-working-exprerience`,{
            workingExperience:workingexp
        },config)
        .then((response) =>{
            console.log(response.data);          
        })
        .catch(err => console.log(err));
    }


    pushTeachingSubject(basedIn,teachingSubject){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        // var newArray = this.state.teachingSubject
        // var itemToBeAdded = {
        //     course:course,
        //     academicLevel:academicLevel,
        //     note:note
        // }
        // newArray.push(itemToBeAdded)
        // this.setState({teachingSubject:newArray});
        axios
        .patch(`api/v1/users/${this.state.iduser}/tutor-teaching-subject`,{
            basedIn:basedIn,
            teachingSubject:teachingSubject    
        },config)
        .then((response) =>{
            console.log(response.data);       
        })
        .catch(err => console.log(err));
    }

    pushIntroduction(aboutme,hourlyrate){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        axios
        .patch(`api/v1/users/${this.state.iduser}/tutor-intro`,{
            aboutMe:aboutme,
            hourlyRate:hourlyrate
        },config)
        .then((response) =>{
            console.log(this.response.data);          
        })
        .catch(err =>console.log(err));
    }

    render() {
    //    console.log(this.state.id);
    const isLogged = localStorage.getItem('signJwt');

    if (!isLogged) {
        return (
            <Redirect to="/" />
        )
    }
        return (
            <div>
                 {this.showheader()}
                <Bodytuitionpre iduser={this.state.iduser} tutorData={this.state.tutorData} avatar={this.state.avatar} firstName={this.state.firstName} lastName={this.state.lastName}
                pushTeachingSubject={(basedIn,course,academicLevel,note) => this.pushTeachingSubject(basedIn,course,academicLevel,note)}
                pushEducation={(someinfo) => this.pushEducation(someinfo)}
                pushworkingExperience={(workingexp) => this.pushworkingExperience(workingexp)} 
                pushIntroduction={(aboutme,hourlyrate) => this.pushIntroduction(aboutme,hourlyrate)}
                freetime={(periodeStart,periodeEnd,hourStart,hourEnd) => this.pushfreetime(periodeStart,periodeEnd,hourStart,hourEnd)}/>
                <Footer/>
            </div>
        );
    }
}

export default Tuition_preference;