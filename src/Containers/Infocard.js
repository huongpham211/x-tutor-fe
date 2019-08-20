import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodyinfocard from '../Components/Body/Bodyinfocard';
import Footer from '../Components/Footer';
import axios from '../axios';
import Headertutor from '../Components/Header/Headertutor';
import { Redirect} from 'react-router-dom';


class Infocard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:null,
            cardId:null,
            id : this.props.match.params.id,
            rolesId:null
        }
    }

    deletefunction(e){
        var config = {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('signJwt'),
            }          
        };
        axios
        .delete(`api/v1/cards/${e}`,config)
        .then((response) =>{
            console.log(response.data);
            
        })
        .catch(err =>console.log(err));
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
               checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
           else {
               return <Header
               passdata={this.state.id}
                checkConnectProps={(dl) => this.props.checkConnectProps(dl)}/>
           }
       }


    componentWillMount() {
        var config = {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('signJwt'),
            }          
        };
        axios
        .get(`api/v1/cards`,config)
        .then((res) =>{
            this.setState({
                data:res.data,
                cardId:res.data._id
            });
            
        })
        .catch(err =>console.log(err));
        
    }
    

    
    render() {
        const isLogged = localStorage.getItem('signJwt');

        if (!isLogged) {
            return (
                <Redirect to="/" />
            )
        }
        // console.log(this.state.id);
        
        return (
            <div>
                 {this.showheader()}
                <Bodyinfocard deletefunction={(e) =>this.deletefunction(e)} passinfocard={this.state.data} passid={this.state.id}/>
                <Footer/>
            </div>
        );
    }
}

export default Infocard;