import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaddtuition from '../Components/Body/Bodyaddtuition';
import Footer from '../Components/Footer';
import axios from '../axios';
import { Redirect} from 'react-router-dom';
import Headertutor from '../Components/Header/Headertutor';

class Add_tuition extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            preferDay:'',
            periodeStart:'',
            lessionsPerCourse:'',
            hoursPerLession:'',
            hourStart:'',
            id : this.props.match.params.id,
            academicLevel:'',
        }
    }

    componentDidMount(){
           axios
           .get(`api/v1/users/${this.state.id}`)
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
            passdata={this.state.id}
            test={this.state.dataDb}
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
 
    

    dataAddtuition(preferDay,periodeStart,academicLevel,lessionsPerCourse,hoursPerLession,hourStart){
        // this.setState({
        //     preferDay:preferDay,
        //     periodeStart:periodeStart,
        //     lessionsPerCourse:lessionsPerCourse,
        //     hoursPerLession:hoursPerLession,
        // });
        var config = {
            headers:{ "Authorization": "Bearer " + localStorage.getItem('signJwt')}
        }
        axios
        .post(`api/v1/users/${this.state.id}/tuition-schedules`,{
            preferDay:preferDay,
            periodeStart:periodeStart,
            lessionsPerCourse:lessionsPerCourse,
            hoursPerLession:hoursPerLession,
            hourStart:hourStart,
            academicLevel:academicLevel
        },config)
        .then((response) =>{    
            return axios
            .get(`api/v1/schedules/${response.data.scheduleCreated._id}`,config)
        })
          .then((response) =>{
              console.log(response);
              this.setState({
                feePerHour:response.data.tuiSchedule.feePerHour,
                feeTotal:response.data.tuiSchedule.feeTotal,
                id:response.data.tuiSchedule._id
              })
            })
            .catch(err => console.log(err))  
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
                <Bodyaddtuition id={this.state.id} feePerHour={this.state.feePerHour} feeTotal={this.state.feeTotal} dataAddtuition={(preferDay,periodeStart,academicLevel,lessionsPerCourse,hoursPerLession,hourStart) => this.dataAddtuition(preferDay,periodeStart,academicLevel,lessionsPerCourse,hoursPerLession,hourStart)}/>
                <Footer/>
            </div>
        );
    }
}

export default Add_tuition;