import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";

class Bodypassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      oldPassword:'',
      newPassword:'',
      confirmNewPassword:''
    }
  }
  
  onOldPassword(e){
    this.setState({
      oldPassword:e.target.value
    })
  }
  onNewPassword(e){
    this.setState({
      newPassword:e.target.value
    })
  }
  onConfirmNewPassword(e){
    this.setState({
      confirmNewPassword:e.target.value
    })
  }

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
            <div className="col-md-9 right">
         
                <div className="tieude khac">
                  <div className="col-md-6 second ">
                    <i className="fas fa-lock"></i>
                    <h5>Change Password</h5>
                  </div>
                </div>
                <form action="" className="khac">
                  <div className="col-md-5 change_password">
                    <div className="form-group">
                      <label htmlFor="">Current password</label>
                      <input type="password" className="form-control" name="oldPassword" id="" aria-describedby="helpId" placeholder="" onChange={(e) =>this.onOldPassword(e)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">New password</label>
                      <input type="password" className="form-control" name="newPassword" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onNewPassword(e)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Re-type new password</label>
                      <input type="password" className="form-control" name="confirmNewPassword" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onConfirmNewPassword(e)}/>
                    </div>
                    <a name="" type="submit" id="update_avatar" className="btn btn-primary" href="#" role="button" onClick={(oldPassword,newPassword,confirmNewPassword) => this.props.changePassword(this.state.oldPassword,this.state.newPassword,this.state.confirmNewPassword)}>Change password</a>
                  </div>
                </form>
              </div>

           
          </div>
        </div>
      </div>

    );
  }
}

export default Bodypassword;