import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import Footer from '../Components/Footer';
import BodyFilterCourse from '../Components/Body/BodyFilterCourse';
import axios from '../axios';
import { Redirect} from 'react-router-dom';

class FilterCourses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            rolesId:null,
            id:this.props.match.params.id,
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
            .catch(err =>console.log(err))
       }
    
    showheader = () => {
        if(this.state.rolesId === 'Tutor'){
            return <Headertutor
            passdata={this.state.id}
          
            />
        }
        else {
            return <Header
            passdata={this.state.id}
             />
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
                <BodyFilterCourse tutor={this.props.tutor} coursename={this.state.coursename} courseFilter={this.props.courseFilter}/>
                <Footer/>
            </div>
        );
    }
}

export default FilterCourses;