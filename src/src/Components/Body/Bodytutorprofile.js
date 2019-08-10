import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Bodytuitorprofile extends Component {
  render() {
    return (
      <div className="account-setting">
        <div className="container">
          <div className="edit-info1 row">
            <div className="col-md-3 left">
              <div className="up text-center">
                <img src={require('../img/member6.jpg')} alt="" />
                <h5>Daniela Queen</h5>
              </div>
              <div className="setting_button">
                <Link to="/add_tuition" name="" id="update_avatar" className="btn btn-primary" href="#" role="button">Add Tuition </Link>
                <a name="" id="delete_avatar" className="btn btn-primary" href="#" role="button">Delete</a>
              </div>
              {/* end setting_button */}
              <div className="info_tuitor">
                <div className="gtinh">
                  <i className="fas fa-user" />
                  <h5>Male</h5>
                </div>
                <div className="noio">
                  <i className="fas fa-map-marker-alt" />
                  <h5>Singapore</h5>
                </div>
              </div>
              {/* end info_tuitor */}
            </div>
            {/* end left */}
            <div className="col-md-9 right">
              <div id="certification">
                <div className="tieude">
                  <i className="far fa-file-alt" />
                  <h5>Certification</h5>
                </div>
                <div id="bangcap">
                  <h3>Google Certified Professional Cloud Architect</h3>
                  <h3>Project Management Professional</h3>
                  <h3>Certified ScrumMaster</h3>
                </div>
              </div>
              {/* end ceetification */}
              <div id="education">
                <div className="tieude">
                  <i className="fas fa-graduation-cap" />
                  <h5>Education</h5>
                </div>
                <div className="giaoduc">
                  <div className="univer">
                    <h3 className="col-md-6" id="univer">Western New England University </h3>
                    <h3 className="col-md-6" id="year">OCT 2010 - MAY 2014</h3>
                  </div>
                  <h3 id="major">Computer Engineering</h3>
                </div>
              </div>
              {/* end education */}
              <div id="experience">
                <div className="tieude">
                  <i className="fas fa-briefcase" />
                  <h5>Working Experience</h5>
                </div>
                <div className="noilam">
                  <div className="univer">
                    <h3 className="col-md-6" id="company">Google LLC </h3>
                    <h3 className="col-md-6" id="year">JULY 2014 - PRESENT</h3>
                  </div>
                  <h3 id="kinhnghiem">Advertising products of the Company to customers effectively: contribute to a 20% increase in the number of customers within one month of working</h3>
                </div>
              </div>
              {/* end experience */}
              <div id="subject">
                <div className="tieude">
                  <i className="fas fa-book-open" />
                  <h5>Teaching Subject</h5>
                </div>
                <div className="monday">
                  <h3>Python Fundamentals</h3>
                  <h3>Web Development with Django and AngularJS</h3>
                  <h3>Full Stack Web Development with Python (WEB2PY)</h3>
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