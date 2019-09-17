import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Bodytuitorprofile extends Component {
  

  workingExperience() {
    if (this.props.workingExperience !== null) {
      return this.props.workingExperience.map((value, key) => (
        <div className="noilam" key={key}>
          <div className="univer">
            <h3 className="col-md-12" id="company">{value.experience}</h3>
          </div>
          <h3 id="kinhnghiem">{value.description}</h3>
        </div>
      ))
    }
  }

  getData() {
    if (this.props.dataTutor !== null) {
      return this.props.dataTutor.map((value, key) => (
        <h3 key={key}>{value.certificate}</h3>
      ))
    }
  }

  dataTechingSubject() {
    if (this.props.dataTeaching !== null) {
      return this.props.dataTeaching.map((value, key) => (
        <h3 key={key}>{value.course}</h3>
      ))
    }
  }

  showbutton() {
    if (this.props.rolesId === 'Student') {
      return (<div id="setting" className="setting_button">
        <Link to={{ pathname: `/add_tuition/${this.props.id}`, iduser: { iduser: this.props.iduser }, courseName: { courseName: this.props.courseName } }}>
          <button name="" id="update_avatar" className="btn btn-primary" >Add Tuition </button>
        </Link>
        <button name="" id="delete_avatar" className="btn btn-primary" >Delete</button>
      </div>)
    }
  }

  education() {
    if (this.props.dataTutor !== null) {
      return this.props.dataTutor.map((value, key) => (
        <div className="giaoduc" key={key}>
          <div className="univer">
            <h3 className="col-md-6" id="univer">{value.institute} </h3>
          </div>
          <h3 id="major">{value.major}</h3>
        </div>
      ))
    }
  }


  render() {
    // console.log(this.props.dataTeaching);
    // console.log(this.props.dataTutor);

    return (
      <div className="account-setting">
        <div className="container">
          <div className="edit-info1 row">
            <div className="col-md-3 left">
              <div className="up text-center">
                <div className="uploadava">
                  <img alt="" className="image" id="output" src={`http://localhost:3001${this.props.avatar}`} />
                </div>

                <h4 >{this.props.firstName} <span>{this.props.lastName}</span></h4>
              </div>
              <div className="aboutme">
                <div className="tieude">
                  <h3>About me</h3>
                  <span></span>
                  <span></span>
                </div>
                <p>{this.props.aboutMe}</p>
              </div>
              <div className="hourlyRate">
                <div className="tieude">
                  <h3>Hourly Rate</h3>
                  <span></span>
                  <span></span>
                </div>
                <p>{this.props.hourlyRate}</p>
              </div>
              {this.showbutton()}
              {/* end setting_button */}
         
              <div className="info_tuitor">
                <div className="gtinh">
                  <i className="fas fa-user" />
                  <h5>{this.props.gender}</h5>
                </div>
                <div className="noio">
                  <i className="fas fa-map-marker-alt" />
                  <h5>{this.props.basedIn}</h5>
                </div>
              </div>
              {/* end info_tuitor */}
            </div>
            {/* end left */}
            <div className="col-md-9 right">
              <div id="certification">
                <div className="tieude ">
                  <i className=" far fa-file-alt" />
                  <h5 className="col-md-10 col-xs-9">Certification</h5>
                </div>
                <div id="bangcap">
                  {this.getData()}
                </div>
              </div>
              {/* end ceetification */}
              <div id="education">
                <div className="tieude ">
                  <i className="fas fa-graduation-cap" />
                  <h5 className="col-md-10 col-xs-9">Education</h5>
                </div>
                {this.education()}
              </div>
              {/* end education */}
              <div id="experience">
                <div className="tieude ">
                  <i className="fas fa-briefcase" />
                  <h5 className="col-md-10 col-xs-9">Working Experience</h5>
                </div>
                {this.workingExperience()}
              </div>
              {/* end experience */}
              <div id="subject">
                <div className="tieude ">
                  <i className="fas fa-book-open" />
                  <h5 className="col-md-10 col-xs-9">Teaching Subject</h5>
                </div>
                <div className="monday">
                  {this.dataTechingSubject()}
                </div>
              </div>
              {/* end subject */}
            </div>
            {/* end right */}
          </div>
        </div>
      </div>

    );
  }
}

export default Bodytuitorprofile;