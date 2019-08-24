import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";

class Bodyaccount extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      country:'',
      firstName:'',
      lastName:'',
      otherName:'',
      address:'',
      nationality:'',
      raceName:'',
      gender:'',
      religion:'',
      email:'',
      CurrentAcademicLevel:'',
      city:'',
      dateOfBirth:'',
      language:'',
      avatar:''
    }
  }
  
  onAvatar(e){
    let avatar = e.target.files;
    this.setState({ avatar: avatar[0] }, () => { console.log(this.state.avatar) });
  }

  onTextboxcountry(e){
    // console.log(event.target.value);
    this.setState({
      country:e.target.value
    })
  }

  onTextboxfirstName(e){
    // console.log(event.target.value);
    this.setState({
      firstName:e.target.value
    })
  }
  onTextboxlastName(e){
    // console.log(event.target.value);
    this.setState({
      lastName:e.target.value
    })
  }
  onTextboxotherName(e){
    // console.log(event.target.value);
    this.setState({
      otherName:e.target.value
    })
  }
  onTextboxaddress(e){
    // console.log(event.target.value);
    this.setState({
      address:e.target.value
    })
  }
  onTextboxnationality(e){
    // console.log(event.target.value);
    this.setState({
      nationality:e.target.value
    })
  }
  onTextboxraceName(e){
    // console.log(event.target.value);
    this.setState({
      raceName:e.target.value
    })
  }
  onTextboxgender(e){
    // console.log(event.target.value);
    this.setState({
      gender:e.target.value
    })
  }
  onTextboxreligion(e){
    // console.log(event.target.value);
    this.setState({
      religion:e.target.value
    })
  }
  onTextboxemail(e){
    // console.log(event.target.value);
    this.setState({
      email:e.target.value
    })
  }
  onTextboxCurrentAcademicLevel(e){
    // console.log(event.target.value);
    this.setState({
      CurrentAcademicLevel:e.target.value
    })
  }
  onTextboxcity(e){
    // console.log(event.target.value);
    this.setState({
      city:e.target.value
    })
  }
  onTextboxdateOfBirth(e){
    // console.log(event.target.value);
    this.setState({
      dateOfBirth:e.target.value
    })
  }
  
  onTextboxLanguage(e){
    // console.log(event.target.value);
    this.setState({
      language:e.target.value
    })
  }

  
  render() {
    
    return (

      <div className="account-setting">
        <div className="container">
          <div className="edit-info row">
            <div className="col-md-3 left">
              <form className="up" method="" encType="multipart/form-data">
                <div className="uploadava">
                  <img className="image" id="output" />
                  <input className="upload" type="file" name="avatar" id="fileInput" onChange={(e) => this.onAvatar(e)}  required />
                </div>

                <h5>Daniela Queen</h5>
                <div className="setting_button">
                  <a name="" type="submit" id="update_avatar" className="btn btn-primary"  role="button" onClick={(e) => this.props.passAvatar(this.state.avatar)}>Update Avatar</a>
                  <a name="" id="delete_avatar" className="btn btn-primary"  role="button">Delete</a>
                </div>
              </form>
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
                    <input type="text" className="form-control" name="firstName" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onTextboxfirstName(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Last name</label>
                    <input type="text" className="form-control" name="lastName" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onTextboxlastName(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Other name</label>
                    <input type="text" className="form-control" name="otherName" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxotherName(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Gender</label>
                    <input type="text" className="form-control" name="gender" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxgender(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Race name</label>
                    <input type="text" className="form-control" name="raceName" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxraceName(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Current Education Level</label>
                    <input type="text" className="form-control" name="CurrentAcademicLevel" id="" aria-describedby="helpId" placeholder={this.state.CurrentAcademicLevel}  onChange={(e) => this.onTextboxCurrentAcademicLevel(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Date of birth</label>
                    <input type="text" className="form-control" name="dateOfBirth" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxdateOfBirth(e)}/>
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
                    <label htmlFor="">Language</label>
                    <input type="text" className="form-control" name="language" id="" aria-describedby="helpId" placeholder="" onChange={(e) => this.onTextboxLanguage(e)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Address</label>
                    <input type="text" className="form-control" name="address" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxaddress(e)}/>
                  </div>
                  <div className="form-group">
                    <label >City name</label>
                    <input type="text" className="form-control" name="city" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxcity(e)}/>
                  </div>
                  <div className="form-group">
                    <label >Country</label>
                    <input type="text" className="form-control" name="country" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxcountry(e)}/>
                  </div>
                  <div className="form-group">
                    <label >Religion</label>
                    <input type="text" className="form-control" name="religion" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxreligion(e)}/>
                  </div>
                  <div className="form-group">
                    <label >Nationality</label>
                    <input type="text" className="form-control" name="nationality" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxnationality(e)}/>
                  </div>
                  <div className="form-group">
                    <label >Email</label>
                    <input type="text" className="form-control" name="email" id="" aria-describedby="helpId" placeholder=""  onChange={(e) => this.onTextboxemail(e)}/>
                  </div>
                </div>
              </form>
              <div className="save_info d-flex justify-content-center">
                <button name="" id="update_avatar" className="btn btn-primary " type="submit" role="button" onClick={(country,firstName,lastName,otherName,address,nationality,raceName,gender,religion,email,CurrentAcademicLevel,city,dateOfBirth,language) => this.props.getData(this.state.country,this.state.firstName,this.state.lastName,this.state.otherName,this.state.address,this.state.nationality,this.state.raceName,this.state.gender,this.state.religion,this.state.email,this.state.CurrentAcademicLevel,this.state.city,this.state.dateOfBirth)}>Save &amp; Update</button>
              </div>
            </div>

          </div>
        </div>
      </div>


    );
  }
}

export default Bodyaccount;