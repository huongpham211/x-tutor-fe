import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Bodyaccount extends Component {
  render() {
    return (

      <div className="account-setting">
        <div className="container">
          <div className="edit-info row">
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
                <Link to="/account_setting" className="edit justify-content-center">
                  <i className="fas fa-user" />
                  <h5>Account Settings</h5>
                  <i className="fas fa-chevron-right" />
                </Link>
                <Link to="/change_password" className="change justify-content-center">
                  <i className="fas fa-lock" />
                  <h5>Change Password</h5>
                  <i className="fas fa-chevron-right" />
                </Link>
                <Link to="./payment_method" className="payment justify-content-center">
                  <i className="far fa-credit-card" />
                  <h5>Payment Info</h5>
                  <i className="fas fa-chevron-right" />
                </Link>
              </div>

            </div>
            <div className="col-md-9 right">
              <form action="">
                <div className="col-md-6 left col-12">
                  <div className="tieude">
                    <div className="col-md-12 first ">
                      <i className="fas fa-user-edit" />
                      <h5>Edit your personal info</h5>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">First name</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Last name</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Other name</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter your nick name here" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Gerder</label>
                    <select className="form-control" name="gender" id="gender">
                      <option className="maukhac">Select your gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Race name</label>
                    <select className="form-control" name="" id="">
                      <option className="maukhac">Select a race</option>
                      <option />
                      <option />
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Current education level</label>
                    <select className="form-control" name="" id="">
                      <option className="maukhac">Select an academic level </option>
                      <option />
                      <option />
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Date of birth</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6 rightt col-12">
                  <div className="tieude">
                    <div className="col-md-12 second">
                      <i className="fas fa-mobile-alt"></i>
                      <h5>Edit your contact info</h5>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Postal code</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Address</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter  your address here" />
                  </div>
                  <div className="form-group">
                    <label >City name</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter  your city name" />
                  </div>
                  <div className="form-group">
                    <label >Country</label>
                    <select className="form-control" name="" id="">
                      <option className="maukhac">Select a country </option>
                      <option />
                      <option />
                    </select>
                  </div>
                  <div className="form-group">
                    <label >Religion</label>
                    <select className="form-control" name="" id="">
                      <option className="maukhac">Select a religion</option>
                      <option />
                      <option />
                    </select>
                  </div>
                  <div className="form-group">
                    <label >Nationality</label>
                    <select className="form-control" name="" id="">
                      <option className="maukhac">Select a nationality</option>
                      <option />
                      <option />
                    </select>
                  </div>
                  <div className="form-group">
                    <label >Email</label>
                    <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter your email here" />
                  </div>
                </div>
              </form>
              <div className="save_info d-flex justify-content-center">
                <a name="" id="update_avatar" className="btn btn-primary " href="#" role="button">Save &amp; Update</a>
              </div>
            </div>

          </div>
        </div>
      </div>


    );
  }
}

export default Bodyaccount;