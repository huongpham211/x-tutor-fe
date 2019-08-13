import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import Footer from '../Components/Footer';
import BodyFilterCourse from '../Components/Body/BodyFilterCourse';
import axios from '../axios';

class FilterCourses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            rolesId:null,
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
                <BodyFilterCourse filterCourse={this.props.courseFilter}/>
                <Footer/>
            </div>
        );
    }
}

export default FilterCourses;