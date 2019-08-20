import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodycourses from '../Components/Body/Bodycourses';
import Footer from '../Components/Footer';
import Headertutor from '../Components/Header/Headertutor';
import axios from '../axios';
import { Redirect} from 'react-router-dom';

class Courses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:this.props.match.params.id,
        }
    }
    
    componentWillMount(){
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
                <Bodycourses dataCourseProps={this.props.dataCourseProps} />
                <Footer/>
            </div>
        );
    }
}

export default Courses;