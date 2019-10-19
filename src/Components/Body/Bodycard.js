import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Bodycard extends Component {
    

    deleteButtonClick = (e) => {
        this.props.deletefunction(e);
    }

    render() {
       
        return (

                <div className="col-md-5 col-12 onecard">
                    <div className="sliderText">
                        <h3>Master Card</h3>
                    </div>
                    <div id="info_card">
                        <div id="nameOnCard">
                            <h1><span>Name on card:</span>{this.props.nameoncard}</h1>
                        </div>
                        <div id="cardNumber">
                            <h1><span>Card number:</span>{this.props.cardnumber}</h1>
                        </div>
                        <div id="expiredDate">
                            <h1><span>Expired date:</span>{this.props.expireddate}</h1>
                        </div>
                        <div id="residentialAddress">
                            <h1><span>Residential address:</span>{this.props.residentialaddress}</h1>
                        </div>
                        <div id="city">
                            <h1><span>City:</span>{this.props.city}</h1>
                        </div>
                        <div id="province">
                            <h1><span>Province:</span>{this.props.province}</h1>
                        </div>
                        <div id="country">
                            <h1><span>Country:</span>{this.props.country}</h1>
                        </div>
                        <div id="postalCode">
                            <h1><span>Postal code:</span>{this.props.postalcode}</h1>
                        </div>
                        <div id="remarks">
                            <h1><span>Remarks:</span>{this.props.remarks}</h1>
                        </div>
                    </div>
                    <div className="overlay"></div>
                    <div id="edit_card">
                        <Link to={{pathname:`/edit_card/${this.props.id}`, iduser: { iduser: this.props.iduser }}} className="fas fa-edit" ></Link>
                        <i className="fas fa-trash-alt" onClick={(e) => this.props.deleteButtonClick(this.props.id)} />
                    </div>
                </div>
        );
    }
}

export default Bodycard;