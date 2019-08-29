import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodycheckout from '../Components/Body/Bodycheckout';
import Footer from '../Components/Footer';
import { Redirect} from 'react-router-dom';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';


class Checkout extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            idcourse : this.props.match.params.id,
            feeTotal:props.location.feeTotal.feeTotal,
            courseName:props.location.courseName.courseName,
            idtutor:props.location.idtutor.idtutor,
            iduser:props.location.iduser.iduser
        }
    }

    
    componentWillMount() {
        axios
        .get(`api/v1/users/${this.state.idtutor}`)
         .then((response) =>{
             console.log(response);
             
             this.setState({
                 name:response.data.userFound.firstName + response.data.userFound.lastName
             })
         })
         .catch(err =>console.log(err));
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
        const isLogged = localStorage.getItem('signJwt');

        if (!isLogged) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                {this.showheader()}
                <Bodycheckout feeTotal={this.state.feeTotal} courseName={this.state.courseName} name={this.state.name} idcourse={this.state.idcourse}/>
                <Footer/>
            </div>
        );
    }
}

export default Checkout;