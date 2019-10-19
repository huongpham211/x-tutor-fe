import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Bodycard from './Bodycard';
import axios from '../../axios';
class Bodyinfocard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            iduser: this.props.iduser,


        }
    }

    componentWillMount() {

        axios
            .get(`api/v1/users/${this.state.iduser}`)
            .then((response) => {
                console.log(response.data);

                this.setState({
                    firstName: response.data.userFound.firstName,
                    lastName: response.data.userFound.lastName,
                    avatar: response.data.userFound.avatar
                })
            })
            .catch(err => console.log(err))
    }

    deleteButtonClick = (e) => {
        this.props.deletefunction(e);
    }

    getData = () => {
        if (this.props.passinfocard !== null) {
            return this.props.passinfocard.map((value, key) =>
                (<Bodycard
                    deleteButtonClick={(e) => this.deleteButtonClick(e)}
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
                    remarks={value.remarks}
                    iduser={this.state.iduser} />)
               
            )
        }
    }

    render() {

        return (
            <div className="account-setting">
                <div className="container">
                    <div className="edit-info1 row">
                        <div className="col-md-3 left">
                            <form className="up" method="" encType="multipart/form-data">
                                <div className="uploadava">
                                    <img alt="" className="image" id="output" src={`https://x-tutor-be.herokuapp.com${this.state.avatar}`} />
                                </div>

                                <h4 >{this.state.firstName} <span>{this.state.lastName}</span></h4>
                                <div className="setting_button">
                                    <button name="" type="submit" id="update_avatar" className="btn btn-primary" onClick={(e) => this.props.passAvatar(this.state.avatar)}>Update Avatar</button>
                                    <button name="" id="delete_avatar" className="btn btn-primary" >Delete</button>
                                </div>
                            </form>
                            <div className="down">
                                <Link to={`/account_setting/${this.props.iduser}`} className="edit justify-content-center">
                                    <i className="fas fa-user" />
                                    <h5>Account Settings</h5>
                                    <i className="fas fa-chevron-right" />
                                </Link>
                                <Link to={`/change_password/${this.props.iduser}`} className="change justify-content-center">
                                    <i className="fas fa-lock" />
                                    <h5>Change Password</h5>
                                    <i className="fas fa-chevron-right" />
                                </Link>
                                <Link to={`/payment_info/${this.props.iduser}`} className="payment justify-content-center">
                                    <i className="far fa-credit-card" />
                                    <h5>Payment Info</h5>
                                    <i className="fas fa-chevron-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-9 right">
                            <div className="tieude khac">
                                <div className="second ">
                                    <i className="fas fa-money-check-alt" />
                                    <h5 className="col-md-10 col-xs-9">Payment Card</h5>
                                </div>
                            </div>
                            <Link to={`/create_card/${this.state.iduser}`} name="" id="addcard" className="otherbutton" href="#" role="button">Add new card</Link>
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