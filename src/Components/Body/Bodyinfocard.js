import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Bodycard from './Bodycard';

class Bodyinfocard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
         id:this.props.passid
        }
    }
    
    deleteButtonClick = (e) => {
        this.props.deletefunction (e);    
    }

    getData = () => {
        if(this.props.passinfocard !== null){
            return this.props.passinfocard.map((value,key) =>
                (<Bodycard
                    deleteButtonClick={(e) =>this.deleteButtonClick(e)}
                    key={key}
                    id={value._id}        
                    nameoncard={value.nameOnCard}
                    cardnumber={value.cardNumber}
                    expireddate={value.expiredDate}
                    residentialaddress={value.residentialAddress}
                    city={value.city}
                    province={value.province}
                    country={value.country}
                    postalcode={value.postalCode}
                    remarks={value.remarks}/>)
            )
        }
    }

    render() {
  
        return (
            <div className="account-setting">
                <div className="container">
                    <div className="edit-info1 row">
                        <div className="col-md-3 left">
                            <div className="up text-center">
                                <img src="./img/member6.jpg" alt="" />
                                <h5>Daniela Queen</h5>
                                <div className="setting_button">
                                    <a name="" id="update_avatar" className="btn btn-primary" href="#" role="button">Update Avatar</a>
                                    <a name="" id="delete_avatar" className="btn btn-primary" href="#" role="button">Delete</a>
                                </div>
                            </div>
                            <div className="down">
                                <Link to={`/account_setting/${this.props.passid}`} className="edit justify-content-center">
                                    <i className="fas fa-user" />
                                    <h5>Account Settings</h5>
                                    <i className="fas fa-chevron-right" />
                                </Link>
                                <Link to={`/change_password/${this.props.passid}`} className="change justify-content-center">
                                    <i className="fas fa-lock" />
                                    <h5>Change Password</h5>
                                    <i className="fas fa-chevron-right" />
                                </Link>
                                <Link to={`/payment_info/${this.props.passid}`} className="payment justify-content-center">
                                    <i className="far fa-credit-card" />
                                    <h5>Payment Info</h5>
                                    <i className="fas fa-chevron-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-9 right">
                            <div className="tieude">
                                <div className="col-md-6 second ">
                                    <i className="fas fa-money-check-alt" />
                                    <h5>Payment Card</h5>
                                </div>
                            </div>
                            <Link to={`/create_card/${this.state.id}`} name="" id="addcard" className="btn btn-primary" href="#" role="button">Add new card</Link>
                            <div className="payment_card">
                            {this.getData()}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Bodyinfocard;