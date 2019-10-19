import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import Footer from '../Components/Footer';
import BodyFilterCourse from '../Components/Body/BodyFilterCourse';
import axios from '../axios';
import { Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class FilterCourses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            rolesId:null,
            iduser:this.props.match.params.id,
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
            iduser={this.state.iduser}
          
            />
        }
        else {
            return <Header
            iduser={this.state.iduser}
             />
        }
    }

    render() {
        function removeDuplicates(array, key) {
            let lookup = {};
            let result = [];
            array.forEach(element => {
                if(!lookup[element[key]]) {
                    lookup[element[key]] = true;
                    result.push(element);
                }
            });
            return result;
        }
        const isLogged = localStorage.getItem('signJwt');

        if (!isLogged) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                {this.showheader()}
                <BodyFilterCourse iduser={this.state.iduser} tutor={this.props.tutor} coursename={this.state.coursename} courseFilter={this.props.courseFilter}/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(FilterCourses);