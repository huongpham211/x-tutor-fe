import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../axios';
import Popup from "reactjs-popup";

class Bodyaddtuition extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      periodeStart: new Date(),
      lessionsPerCourse: '',
      hoursPerLession: '',
      hourStart: '',
      feePerHour: '',
      feeTotal: '',
      periodeEnd: ''
    }
  }

  componentWillMount() {
    var config = {
      headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
    }
    axios
      .get(`api/v1/users/${this.props.iduser}/tuition-schedules`, config)
      .then((res) => {
        this.setState({data:res.data.allSchedules}); 
      })
      .catch(err => console.log(err))
  }

  mapsession() {
    if (this.state.data.length > 0) {
      return this.state.data.map((value, key) => (
        <div className="col-lg-6" key={key}>
          <div id="onesession">
            <h3>{value.courseCode}</h3>
            <h4>{value.hourStart}:00 - {value.hourEnd}:00</h4>
            <h4>{(new Date(value.periodeStart).toLocaleDateString())} - {(new Date(value.periodeEnd).toLocaleDateString())}</h4>
          </div>
        </div>
      ))
    }
  }


  componentDidMount() {
    axios
      .get(`api/v1/users/${this.props.idtutor}`)
      .then((response) => {
        console.log(response.data.userFound);
        this.setState({
          startDayTutor: response.data.userFound.tutorData.periodeStart,
          endDayTutor: response.data.userFound.tutorData.periodeEnd,
          hourStartTutor: response.data.userFound.tutorData.hourStart,
          hourEndTutor: response.data.userFound.tutorData.hourEnd
        })
      })
      .catch(err => console.log(err));
  }



  handleSubmit = () => {

    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const { pet } = this.form;

    // convert node list to an array
    const checkboxArray = Array.prototype.slice.call(pet);

    // extract only the checked checkboxes
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    // console.log('checked array:', checkedCheckboxes);

    // use .map() to extract the value from each checked checkbox
    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
    // console.log('checked array values:', checkedCheckboxesValues);
    this.setState({
      preferDay: checkedCheckboxesValues
    });
  }

  onStartDate(date) {
    this.setState({
      periodeStart: date
    });
  }


  onEndDate(date) {
    this.setState({
      periodeEnd: date
    });
  }

  onLessionsPerCourse(e) {
    this.setState({
      lessionsPerCourse: Number(e.target.value)
    });
  }

  onHoursPerLession(e) {
    this.setState({
      hoursPerLession: Number(e.target.value)
    });
  }

  onHourStart(e) {
    this.setState({
      hourStart: Number(e.target.value)
    });
  }
  onAcademicLevel(e) {
    this.setState({
      academicLevel: e.target.value
    });
  }


  // componentWillMount() {

  //   var config = {
  //     headers:{"Authorization": "Bearer " + localStorage.getItem("signJwt")}
  //   }

  // }



  render() {
    return (
      <div>

        <div className="addtuition">
          <div className="container">
            <div className="ngoai">
              <div className="tieude d-flex justify-content-center">
                <i className="fas fa-solar-panel"></i>
                <h5>Add Tution Schedule</h5>
              </div>
              <form id="tuition_schedule" ref={form => this.form = form}>
                <div className=" tren1">
                  <h3>Preferred day *</h3>
                  <div className="checkbox" onChange={this.handleSubmit}>
                    <label>
                      <input type="checkbox" value="Monday" name="pet" />
                      Monday
                    </label>
                    <label>
                      <input type="checkbox" value="Tuesday" name="pet" />
                      Tuesday
                    </label>
                    <label>
                      <input type="checkbox" value="Wednesday" name="pet" />
                      Wednesday
                    </label>
                    <label>
                      <input type="checkbox" value="Thursday" name="pet" />
                      Thursday
                    </label>
                    <label>
                      <input type="checkbox" value="Friday" name="pet" />
                      Friday
                    </label>
                    <label>
                      <input type="checkbox" value="Saturday" name="pet" />
                      Saturday
                    </label>
                    <label>
                      <input type="checkbox" value="Sunday" name="pet" />
                      Sunday
                    </label>

                  </div>
                </div>
                <div className="duoi1 row">
                  <div className="col-md-6 trai">
                    <div className="form-group change">
                      <label htmlFor="">Start date*</label>
                      {/* <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onStartDate(e)}/> */}
                      <DatePicker
                        selected={this.state.periodeStart}
                        onChange={(date) => this.onStartDate(date)}
                        minDate={new Date()}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Academic level</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onAcademicLevel(e)} />
                    </div>

                    <div className="form-check condition">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">I understand that this tutor may not be available subsequent months</label>
                    </div>
                  </div>
                  <div className="col-md-6 phai">
                    <div className="form-group change">
                      <label htmlFor="">End date</label>
                      {/* <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onStartDate(e)}/> */}
                      <DatePicker
                        selected={this.state.periodeEnd}
                        onChange={(date) => this.onEndDate(date)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Hour start</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onHourStart(e)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Hours per session</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onHoursPerLession(e)} />
                    </div>
                  </div>
                </div>
              </form>
              <div className="save_info d-flex justify-content-center">
                <button name="" type="submit" id="update_avatar" className="btn btn-primary " onClick={(preferDay, periodeStart, academicLevel, periodeEnd, hoursPerLession, hourStart) => this.props.dataAddtuition(this.state.preferDay, this.state.periodeStart, this.state.academicLevel, this.state.periodeEnd, this.state.hoursPerLession, this.state.hourStart)}>Add Tuition Schedule</button>
              </div>
              <div>
                        <span className="text-danger" id="error-notice-addtuition" >{this.props.error_addtuition}</span>
                    </div>
              <div className="group_button">
                <Popup modal trigger={<button className="btn btn-primary maudep" >Free schedules</button>}>
                  {close => (
                    <div className="khongcare">
                      <a className="close" onClick={close}>
                        &times;
           </a>
                      <div className="free_schedule row">
                        {this.mapsession()}
                      </div>
                    </div>
                  )}
                </Popup>

                <Popup modal trigger={<button name="" id="update_avatar" type="submit" className="btn btn-primary maudep"  >Tutor free time</button>}>
                  {close => (
                    <div className="khongcare">
                      <a className="close" onClick={close}>
                        &times;
           </a>
                      <h4>Tutor free time</h4>
                      <h5>Start Date<span>{this.state.startDayTutor}</span></h5>
                      <h5>End Date<span>{this.state.endDayTutor}</span></h5>
                      <h5>Start hour<span>{this.state.hourStartTutor}</span></h5>
                      <h5>End hour<span>{this.state.hourEndTutor}</span></h5>

                    </div>
                  )}
                </Popup>
                <Link to={{ pathname: `/infotuition/${this.props.idtutor}`, courseName: { courseName: this.props.courseName }, iduser: { iduser: this.props.iduser }, idtuition: { idtuition: this.props.idtuition }, feePerHour: { feePerHour: this.props.feePerHour }, feeTotal: { feeTotal: this.props.feeTotal }, lessionsPerCourse: { lessionsPerCourse: this.props.lessionsPerCourse }, hoursPerLession: { hoursPerLession: this.state.hoursPerLession } }}><button name="" type="submit" id="checkinfotuition" className="otherbutton maudep">Check info tuition</button></Link>

              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Bodyaddtuition;