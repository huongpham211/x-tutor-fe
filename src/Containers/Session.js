import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodysession from '../Components/Body/Bodysession';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';

class Session extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            iduser:props.location.iduser.iduser,
            idcourses:this.props.match.params.id
        }
    }

    rateSession = (rateComment,rateStar) => {
        var config = {
            headers:{ "Authorization": "Bearer " + localStorage.getItem('signJwt')}
        }
        axios
        .patch(`api/v1/sessions/${this.state.idcourses}/rate`,
        {
            rateComment: rateComment,
            rateStar: rateStar
        },config)
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    }

    reportSession = (reportIssue,reportComment) => {
        // console.log(reportIssue.toString());
        // console.log(reportComment);
        
        var config = {
            headers:{ "Authorization": "Bearer " + localStorage.getItem('signJwt')}
        }
        axios
        .patch(`api/v1/sessions/${this.state.idcourses}/report`,
        {
            reportIssue: reportIssue.toString(),
            reportComment: reportComment
        },config)
        .then((res) => console.log(res))
        .catch(err => console.log(err))
    }

    componentDidMount(){
   
        axios
        .get(`api/v1/users/${this.state.iduser}`)
         .then((response) =>{
             this.setState({
                 rolesId:response.data.userFound.rolesId
             })
         })
         .catch(err =>console.log(err));
            
     }
    
    showheader = () => {
        if(this.state.rolesId === 'Tutor'){
            return <Headertutor
            iduser={this.state.iduser}
            test={this.state.dataDb}
            checkConnectProps={(dl) => this.props.checkConnectProps(dl)}
          
            />
        }
        else {
            return <Header
            iduser={this.state.iduser}
             checkConnectProps={(dl) => this.props.checkConnectProps(dl)}
            />
        }
    }

    render() {
        return (
            <div>
                {this.showheader()}
                <Bodysession iduser={this.state.iduser} idcourses={this.state.idcourses} rateSession={(rateComment,rateStar) => this.rateSession(rateComment,rateStar)} reportSession={(reportIssue,reportComment) => this.reportSession(reportIssue,reportComment)}/>
                <Footer/>
            </div>
        );
    }
}

export default Session;