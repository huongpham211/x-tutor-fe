import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Headertutor from '../Components/Header/Headertutor';
import Bodypayment from '../Components/Body/Bodycreatecard';
import Footer from '../Components/Footer';
import axios from '../axios';
import { Redirect} from 'react-router-dom';

class UpdateCard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cardType:'',
            nameOnCard:'',
            cardNumber:0,
            expiredDate:'',
            remarks:'',
            residentialAddress:'',
            city:'',
            province:'',
            country:'',
            postalCode:'',
        }
        // this.checkConnect = this.checkConnect.bind(this);
    }

    componentWillMount() {
        this.setState({
            cardId:this.props.match.params.id
        })          
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

    checkConnect = (cardType,nameOnCard,cardNumber,expiredDate,remarks,residentialAddress,city,province,country,postalCode) =>{
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        axios
        .put(`api/v1/cards/${this.state.cardId}`,{
            cardType:cardType,
            nameOnCard:nameOnCard,
            cardNumber:cardNumber,
            expiredDate:expiredDate,
            remarks:remarks,
            residentialAddress:residentialAddress,
            city:city,
            province:province,
            country:country,
            postalCode:postalCode
        },config)
        .then((response) =>{
            console.log(response.data);    
        })
        .catch(err => console.log(err.response));   
    }

    render() {
    //    console.log(this.state.id);
    const isLogged = localStorage.getItem('signJwt');

    if (!isLogged) {
        return (
            <Redirect to="/" />
        )
    }
        
        return (
            <div>
                {this.showheader()}
                <Bodypayment  infoPayment={(cardType,nameOnCard,cardNumber,expiredDate,remarks,residentialAddress,city,province,country,postalCode) => this.checkConnect(cardType,nameOnCard,cardNumber,expiredDate,remarks,residentialAddress,city,province,country,postalCode)}/>
                <Footer/>
            </div>
        );
    }
}

export default UpdateCard;