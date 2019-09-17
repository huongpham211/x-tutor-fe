import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from '../../axios';
class Bodypassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  }

  componentWillMount() {

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

  onOldPassword(e) {
    this.setState({
      oldPassword: e.target.value
    })
  }
  onNewPassword(e) {
    this.setState({
      newPassword: e.target.value
    })
  }
  onConfirmNewPassword(e) {
    this.setState({
      confirmNewPassword: e.target.value
    })
  }

  render() {
    return (
      <div className="account-setting">
        <div className="container">
          <div className="edit-info1 row">
            <div className="col-md-3 left">
              <form className="up" method="" encType="multipart/form-data">
                <div className="uploadava">
                  <img alt="" className="image" id="output" src={`http://localhost:3001${this.state.avatar}`} />
                  <input className="upload" type="file" name="avatar" id="fileInput" onChange={(e) => this.onAvatar(e)} required />
                </div>

                <h4 >{this.state.firstName} <span>{this.state.lastName}</span></h4>
                <div className="setting_button">
                  <button name="" type="submit" id="update_avatar" className="btn btn-primary" onClick={(e) => this.props.passAvatar(this.state.avatar)}>Update Avatar</button>
                  <button name="" id="delete_avatar" className="btn btn-primary">Delete</button>
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
                  <i className="fas fa-lock"></i>
                  <h5 id="change_password" className="col-md-10 col-xs-9">Change Password</h5>
                </div>
              </div>
              <form action="" className="khac">
                <div className="col-md-5 change_password">
                  <div className="form-group">
                    <label htmlFor="">Current password</label>
                    <input type="password" className="form-control" name="oldPassword" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onOldPassword(e)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">New password</label>
                    <input type="password" className="form-control" name="newPassword" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onNewPassword(e)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Re-type new password</label>
                    <input type="password" className="form-control" name="confirmNewPassword" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onConfirmNewPassword(e)} />
                  </div>
                  <div>
                        <span className="text-danger" id="error-notice" >{this.props.changePasswordErr}</span>
                    </div>
                  <button name="" type="submit" id="update_avatar" className="btn btn-primary" onClick={(oldPassword, newPassword, confirmNewPassword) => this.props.changePassword(this.state.oldPassword, this.state.newPassword, this.state.confirmNewPassword)}>Change password</button>
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