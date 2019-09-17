import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from '../../axios';

class Headertutor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tempValue: '',
      coursename: '',
      tutor: ''
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


  //  onCourseName(e) {
  //   this.setState({
  //     coursename: e.target.value
  //   });
  // }

  // onTutor(e) {
  //   this.setState({
  //     tutor: e.target.value
  //   });
  // }

  logoutHandler() {
    localStorage.clear();
    window.location.href = '/';
  }

  isChange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempValue: event.target.value
    });
    this.props.checkConnectProps(this.state.tempValue);
  }




  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light ">
          <div className="container">
            <Link className="navbar-brand" to={`/page/${this.props.iduser}`}>
            <span>Xtutor</span>

            </Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-align-justify" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item form-search">
                  <input type="text" name="search" onChange={(event) => this.isChange(event)} placeholder="Do you want to learn today ?" />
                  <Link to={`/courses/${this.props.iduser}`}>
                    <i type="reset" className="fas fa-search" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}></i>
                  </Link>
                </li>
                <li className="nav-item" >
                  <a href={`/filter/${this.props.iduser}`} className="nav-link" >Filter</a>
                </li>
                <li className="nav-item avatar d-flex align-items-center" >
                  <img src={`http://localhost:3001${this.state.avatar}`} alt="" className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                  <h4 >{this.state.firstName} <span>{this.state.lastName}</span></h4>
                  <ul className="slide_menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <Link to={`/account_setting/${this.props.iduser}`} className="">
                      Account Settings
                      </Link>
                    <Link to={`/coursestutor/${this.props.iduser}`} className="">
                      Your Courses
                      </Link>
                    <a href={`/tutor_preference/${this.props.iduser}`} className="">
                      Tutor preference
                      </a>
                    <Link to={{pathname:`/tutor_profile/${this.props.iduser}`,iduser:{iduser:this.props.iduser},courseName:{courseName:this.props.courseName}}} className="">
                      Tutor Detail
                      </Link>
                    <a href="/" onClick={this.logoutHandler}>Logout</a>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <div className="modal fade" id="formFilter" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form action="" className="login-form1">
                <h1>Filter</h1>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">x</span>
                </button>
                <div className="txtb">
                  <input id=""  type="text" />
                  <span data-placeholder="Your academic level" />
                </div>
                <div className="txtb">
                  <input id=""  type="text"  onChange={(e) => this.onCourseName(e)}/>
                  <span data-placeholder="All courses here"/>
                </div>
                <div className="txtb">
                  <input id=""  type="text"  onChange={(e) => this.onTutor(e)}/>
                  <span data-placeholder="Tutor"/>
                </div>
                <Link to={`/filter_course/${this.props.passdata}`} className="logbtn" onClick={(coursename,tutor) => this.props.filterFunction(this.state.coursename,this.state.tutor)}>Filter</Link>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Headertutor;