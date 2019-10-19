import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodycourses from '../Components/Body/Bodycourses';
import Footer from '../Components/Footer';
import Headertutor from '../Components/Header/Headertutor';
import axios from '../axios';
import { Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class Courses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            iduser:this.props.match.params.id,
        }
    }

    
//   contentSearch = (dl) => {
    
//     this.setState({
//       searchText: dl
//     })
//     console.log('du bo lieu nhan duoc la ' + this.state.searchText);
//   }
    
    componentWillMount(){
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
           axios
           .get(`api/v1/users/${this.state.iduser}`,config)
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
        console.log(this.props);
        
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
        console.log(removeDuplicates(this.props.dataCourseProps))
        const isLogged = localStorage.getItem('signJwt');

        if (!isLogged) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                {this.showheader()}
                <Bodycourses iduser={this.state.iduser} checkConnectProps={this.props.checkConnectProps} dataCourseProps={this.props.dataCourseProps} />
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Courses);