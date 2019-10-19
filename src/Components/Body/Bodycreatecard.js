import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Bodycreatecard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cardType: 'Visa',
      nameOnCard: '',
      cardNumber: 0,
      expiredDate: '',
      remarks: '',
      residentialAddress: '',
      city: '',
      province: '',
      country: '',
      postalCode: ''
    }
    this.changeNameOnCard = this.changeNameOnCard.bind(this);
    this.changeCardNumber = this.changeCardNumber.bind(this);
    // this.radioChange = this.radioChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`api/v1/users/${this.props.iduser}`)
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

  changeNameOnCard(e) {
    this.setState({
      nameOnCard: e.target.value
    });
    console.log(this.state.nameOnCard);


  }
  changeCardNumber(e) {
    this.setState({
      cardNumber: Number(e.target.value)
    });

  }
  changeExpiredDate(e) {
    this.setState({
      expiredDate: e.target.value
    });

  }
  changeRemarks(e) {
    this.setState({
      remarks: e.target.value
    });

  }
  changeResidentialAddress(e) {
    this.setState({
      residentialAddress: e.target.value
    });

  }
  changeCity(e) {
    this.setState({
      city: e.target.value
    });

  }
  changeProvince(e) {
    this.setState({
      province: e.target.value
    });

  }
  changeCountry(e) {
    this.setState({
      country: e.target.value
    });

  }
  changePostalCode(e) {
    this.setState({
      postalCode: e.target.value
    });

  }

  render() {


    return (
      <div className="account-setting">
        <div className="container">
          <div className="edit-info1 row">
            <div className="col-md-3 left">
              <div className="up text-center">
                <div className="uploadava">
                  <img alt="" className="image" id="output" src={`https://x-tutor-be.herokuapp.com${this.state.avatar}`} />
                </div>

                <h4 >{this.state.firstName} <span>{this.state.lastName}</span></h4>
                <div className="setting_button">
                  <button name="" id="update_avatar" className="btn btn-primary">Update Avatar</button>
                  <button name="" id="delete_avatar" className="btn btn-primary" href="#" role="button">Delete</button>
                </div>
              </div>
              <div className="down">
                <Link to={`/account_setting/${this.props.passdata}`} className="edit justify-content-center">
                  <i className="fas fa-user" />
                  <h5>Account Settings</h5>
                  <i className="fas fa-chevron-right" />
                </Link>
                <Link to={`/change_password/${this.props.passdata}`} className="change justify-content-center">
                  <i className="fas fa-lock" />
                  <h5>Change Password</h5>
                  <i className="fas fa-chevron-right" />
                </Link>
                <Link to={`/payment_info/${this.props.passdata}`} className="payment justify-content-center">
                  <i className="far fa-credit-card" />
                  <h5>Payment Info</h5>
                  <i className="fas fa-chevron-right" />
                </Link>
              </div>
            </div>
            <div className="col-md-9 right ">
              <div className="tieude">
                <div className="col-md-6 second ">
                  <i className="fas fa-info"></i>
                  <h5>Payment info</h5>
                </div>
              </div>
              {/* end tieu de */}
              <form method="" id="change">
                <div className="paymentCont text-center">
                  <div className="paymentWrap">
                    <div className="btn-group paymentBtnGroup btn-group-justified" >
                      <label className="btn paymentMethod active">
                        <div className="method visa" />
                        <input type="radio" name="options" value='Visa' checked={this.state.cardType === 'Visa'} onChange={(e) => this.setState({ cardType: e.target.value })} />
                      </label>
                      <label className="btn paymentMethod">
                        <div className="method master-card" />
                        <input type="radio" name="options" value="Master Card" checked={this.state.cardType === 'Master Card'} onChange={(e) => this.setState({ cardType: e.target.value })} />
                      </label>
                    </div>
                  </div>
                </div>
                <div id="throne">
                  <div className="col-md-6 left col-12" >
                    <div className="tieude">
                      <div className="col-md-12 first ">

                        <h5 id="credit_infor">Credit Card Info</h5>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Name On Card</label>
                      <input type="text" className="form-control" name="nameOnCard" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changeNameOnCard(e)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Card Number</label>
                      <input type="text" className="form-control" name="cardNumber" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changeCardNumber(e)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Expired Date</label>
                      <input type="text" className="form-control" name="expiredDate" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changeExpiredDate(e)} required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Cvv</label>
                      <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" readOnly />
                    </div>
                    <div className="form-group">
                      <label >Remarks</label>
                      <input type="text" className="form-control" name="remarks" id="" aria-describedby="helpId" placeholder="Enter  your city name" onChange={(e) => this.changeRemarks(e)} />
                    </div>

                  </div>
                  {/* end left */}
                  <div className="col-md-6 rightt col-12">
                    <div className="tieude">
                      <div className="col-md-12 second">

                        <h5 id="billing_info">Billing info</h5>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Residential Address</label>
                      <input type="text" className="form-control" name="residentialAddress" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changeResidentialAddress(e)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">City Address</label>
                      <input type="text" className="form-control" name="city" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changeCity(e)} />
                    </div>
                    <div className="form-group">
                      <label >Province</label>
                      <input type="text" className="form-control" name="province" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changeProvince(e)} />
                    </div>

                    <div className="form-group">
                      <label >Country</label>
                      <input type="text" className="form-control" name="country" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changeCountry(e)} />
                    </div>

                    <div className="form-group">
                      <label >Postal Code</label>
                      <input type="text" className="form-control" name="postalCode" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.changePostalCode(e)} />
                    </div>
                  </div>
                  {/* end rightt */}
                </div>
              </form>
              <div className="save_info d-flex justify-content-center">
                <button type="submit" name="" id="update_avatar" className="btn btn-primary " href="#" onClick={(cardType, nameOnCard, cardNumber, expiredDate, remarks, residentialAddress, city, province, country, postalCode) => this.props.infoPayment(this.state.cardType, this.state.nameOnCard, this.state.cardNumber, this.state.expiredDate, this.state.remarks, this.state.residentialAddress, this.state.city, this.state.province, this.state.country, this.state.postalCode)}>Save payment info</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Bodycreatecard;