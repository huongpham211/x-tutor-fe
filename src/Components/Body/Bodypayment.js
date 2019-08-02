import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Bodypayment extends Component {
  render() {
    return (
      <div className="account-setting">
        <div className="container">
          <div className="edit-info1 row">
            <div className="col-md-3 left">
              <div className="up text-center">
                <img src={require('../img/member6.jpg')} alt="" />
                <h5>Daniela Queen</h5>
                <div className="setting_button">
                  <a name="" id="update_avatar" className="btn btn-primary" href="#" role="button">Update Avatar</a>
                  <a name="" id="delete_avatar" className="btn btn-primary" href="#" role="button">Delete</a>
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
              <div className="paymentCont text-center">
                <div className="paymentWrap">
                  <div className="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">
                    <label className="btn paymentMethod active">
                      <div className="method visa" />
                      <input type="radio" name="options" defaultChecked />
                    </label>
                    <label className="btn paymentMethod">
                      <div className="method master-card" />
                      <input type="radio" name="options" />
                    </label>
                  </div>
                </div>
              </div>
              <form action="" id="throne">
                <div className="col-md-6 left col-12">
                  <div className="tieude">
                    <div className="col-md-12 first ">

                      <h5 id="credit_infor">Credit Card Info</h5>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Name On Card</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Card Number</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Expired Date</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Cvv</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" readOnly />
                  </div>
                  <div className="form-group">
                    <label >Remarks</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter  your city name" />
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
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">City Address</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter  your address here" />
                  </div>
                  <div className="form-group">
                    <label >Province</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter  your city name" />
                  </div>

                  <div className="form-group">
                    <label >Country</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter  your city name" />
                  </div>

                  <div className="form-group">
                    <label >Postal Code</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter  your city name" />
                  </div>




                </div>
                {/* end rightt */}
              </form>
              <div className="save_info d-flex justify-content-center">
                <a name="" id="update_avatar" className="btn btn-primary " href="#" role="button">Save payment info</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Bodypayment;