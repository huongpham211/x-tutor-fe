import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodytuitionpre from '../Components/Body/Bodytutorpre';
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
    
    pushEducation(major,institute,certificate){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        var newArray = this.state.education
        var itemToBeAdded = {
            major : major,
            institute : institute,
            certificate:certificate
          };
          newArray.push(itemToBeAdded);
          this.setState( {education:newArray} )

        axios
        .patch(`api/v1/users/${this.state.id}/tutor-reference`,{
           education:this.state.education
        },config)
        .then((response) => {
            console.log(response.data);         
        })
        .catch(err => console.log(err));   
    }

    pushworkingExperience(year,experience){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        var newArray = this.state.pushworkingExperience
        var itemToBeAdded = {
            year:year,
            experience:experience
        }
        newArray.push(itemToBeAdded)
        this.setState({workingExperience:newArray});
        axios
        .patch(`api/v1/user/${this.state.id}/tutor-working-exprerience`,{
            workingExperience:this.state.workingExperience
        },config)
        .then((response) =>{
            console.log(response.data);          
        })
        .catch(err => console.log(err));
    }


    pushTeachingSubject(basedIn,course,academicLevel,note){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        var newArray = this.state.teachingSubject
        var itemToBeAdded = {
            course:course,
            academicLevel:academicLevel,
            note:note
        }
        newArray.push(itemToBeAdded)
        this.setState({teachingSubject:newArray});
        axios
        .patch(`api/v1/users/${this.state.id}/tutor-teaching-subject`,{
            basedIn:basedIn,
            teachingSubject:this.state.teachingSubject     
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
    //    console.log(this.state.id);
       
        return (
            <div>
                 {this.showheader()}
                <Bodytuitionpre
                pushTeachingSubject={(basedIn,course,academicLevel,note) => this.pushTeachingSubject(basedIn,course,academicLevel,note)}
                pushEducation={(major,institute,certificate) => this.pushEducation(major,institute,certificate)}
                pushworkingExperience={(year,experience) => this.pushworkingExperience(year,experience)} 
                pushIntroduction={(aboutme,hourlyrate) => this.pushIntroduction(aboutme,hourlyrate)}/>
                <Footer/>
            </div>
        );
    }
}

export default Tuition_preference;