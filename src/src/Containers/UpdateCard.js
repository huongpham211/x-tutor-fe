import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Bodypayment from '../Components/Body/Bodycreatecard';
import Footer from '../Components/Footer';
import axios from '../axios';

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

    componentDidMount() {
        this.setState({
            cardId:this.props.match.params.id
        })          
    }

    checkConnect = (cardType,nameOnCard,cardNumber,expiredDate,remarks,residentialAddress,city,province,country,postalCode) =>{
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
        };
        axios
        .put(`api/v1/cards/${this.state.cardId}`,{
            cardType:cardType,
        },config)
        .then((response) =>{
            console.log(response.data);    
        })
        .catch(err => console.log(err));   
    }

    render() {
    //    console.log(this.state.id);
       
        
        return (
            <div>
                <Header/>
                <Bodypayment passdata={this.state.id} infoPayment={(cardType,nameOnCard,cardNumber,expiredDate,remarks,residentialAddress,city,province,country,postalCode) => this.checkConnect(cardType,nameOnCard,cardNumber,expiredDate,remarks,residentialAddress,city,province,country,postalCode)}/>
                <Footer/>
            </div>
        );
    }
}

export default UpdateCard;