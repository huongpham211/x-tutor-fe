import React, { Component } from 'react';
import Bodyschedututor from '../Components/Body/Bodyschedututor';
import Footer from '../Components/Footer';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import axios from '../axios';

class Schedulletutor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            iduser:props.location.iduser.iduser,
            idcourses:this.props.match.params.id,
            courseName:props.location.courseName.courseName
        }
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
                <Bodyschedututor courseName={this.state.courseName} iduser={this.state.iduser} idcourses={this.state.idcourses}/>
                <Footer/>
            </div>
        );
    }
}

export default Schedulletutor;