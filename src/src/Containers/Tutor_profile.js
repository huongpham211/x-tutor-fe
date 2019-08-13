import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodytuitorprofile from '../Components/Body/Bodytutorprofile';
import Footer from '../Components/Footer';
import Headertutor from '../Components/Header/Headertutor';
import axios from '../axios';

class Tuitor_profile extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id : this.props.match.params.id,
            data:null,
            dataTeaching:null
        }
        
    }

    componentWillMount(){
        var config = {
            headers: { "Authorization": "Bearer " + localStorage.getItem('signJwt')}
        }
        axios
        .get(`api/v1/users/${this.state.id}`,config)
        .then((response) => {
            this.setState({
                data:response.data.userFound.tutorData.education,
                dataTeaching:response.data.userFound.tutorData.teachingSubject,
                gender:response.data.userFound.gender,
                basedIn:response.data.userFound.tutorData.basedIn
            });
        })
        .catch(err => console.log(err));
    }

    showheader = () => {
        if(this.state.rolesId === 'Tutor'){
            return <Headertutor
            passdata={this.state.id}
            checkConnectProps={(dl) => this.props.checkConnectProps(dl)}
            filterFunction={(coursename,tutor) => this.props.filterFunction(coursename,tutor)} 
            />
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
                <Bodytuitorprofile
                basedIn={this.state.basedIn}
                gender={this.state.gender}
                dataTeaching={this.state.dataTeaching}
                dataTutor={this.state.data}/>
                <Footer/>
            </div>
        );
    }
}

export default Tuitor_profile;