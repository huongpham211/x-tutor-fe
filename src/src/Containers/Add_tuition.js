import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyaddtuition from '../Components/Body/Bodyaddtuition';
import Footer from '../Components/Footer';
import axios from '../axios';

class Add_tuition extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            preferDay:'',
            periodeStart:'',
            lessionsPerCourse:'',
            hoursPerLession:'',
            hourStart:''
        }
    }
    
   
    

    dataAddtuition(preferDay,periodeStart,lessionsPerCourse,hoursPerLession,hourStart){
        this.setState({
            preferDay:preferDay,
            periodeStart:periodeStart,
            lessionsPerCourse:lessionsPerCourse,
            hoursPerLession:hoursPerLession,
        });
        // var config = {
        //     headers:{ "Authorization": "Bearer " + localStorage.getItem('signJwt')}
        // }
        // axios
        // .post(`api/v1/users/5d4ed18ddf00f75dec0cf36c/tuition-schedules`,{
        //     preferDay:preferDay,
        //     periodeStart:periodeStart,
        //     lessionsPerCourse:lessionsPerCourse,
        //     hoursPerLession:hoursPerLession,
        //     hourStart:hourStart

        // },config)
        // .then((response) =>{
        //     console.log(response.data);     
        // })
        // .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Header/>
                <Bodyaddtuition dataAddtuition={(preferDay,periodeStart,lessionsPerCourse,hoursPerLession,hourStart) => this.dataAddtuition(preferDay,periodeStart,lessionsPerCourse,hoursPerLession,hourStart)}/>
                <Footer/>
            </div>
        );
    }
}

export default Add_tuition;