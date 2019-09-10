import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Headerhome extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light logoandmenu">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span>Xtutor</span>

          </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-align-justify" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item active">
                <a href="/" className="nav-link" >Home <span className="sr-only">(current)</span></a>
              </li>
          
              <li className="nav-item">
                <a href="/aboutus" className="nav-link" >About us</a>
              </li>

              <li className="nav-item" data-toggle="modal" data-target="#modalLoginForm">
                <a href="/signin" className="nav-link" >Log in</a>
              </li>
              <li className="nav-item" data-toggle="modal" data-target="#modalSignupForm">
                <a href="signup" className="nav-link" >Signup</a>
              </li>
            </ul></div>
        </div>
      </nav>
    );
  }
}

export default Headerhome;