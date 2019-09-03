import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Bodyaddtuition extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      periodeStart:new Date(),
      lessionsPerCourse:'',
      hoursPerLession:'',
      hourStart:'',
      feePerHour:'',
      feeTotal:''
    }
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
      periodeStart:date
    });
  }
  
  onLessionsPerCourse(e) {
    this.setState({
      lessionsPerCourse:Number(e.target.value)
    });
  }

  onHoursPerLession(e) {
    this.setState({
      hoursPerLession:Number(e.target.value)
    });
  }

  onHourStart(e){
    this.setState({
      hourStart:Number(e.target.value)
    });
  }
  onAcademicLevel(e){
    this.setState({
      academicLevel:e.target.value
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
                        // selected={this.state.startDate}
                        onChange={(date) => this.onStartDate(date)}
                      />
                    </div>
                   
                    <div className="form-group">
                      <label htmlFor="">Academic level</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onAcademicLevel(e)}/>
                    </div>
                   
                    <div className="form-check condition">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">I understand that this tutor may not be available subsequent months</label>
                    </div>
                  </div>
                  <div className="col-md-6 phai">
                    <div className="form-group">
                      <label htmlFor="">No. of lesson per course</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onLessionsPerCourse(e)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Hour start</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onHourStart(e)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Hours per session</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onHoursPerLession(e)}/>
                    </div>
                  </div>
                </div>
              </form>
              <div className="save_info d-flex justify-content-center">
                <Link to={{pathname:`/infotuition/${this.props.idtutor}`,courseName:{courseName:this.props.courseName},iduser:{iduser:this.props.iduser},idtuition:{idtuition:this.props.idtuition},feePerHour:{feePerHour:this.props.feePerHour},feeTotal:{feeTotal:this.props.feeTotal},lessionsPerCourse:{lessionsPerCourse:this.state.lessionsPerCourse},hoursPerLession:{hoursPerLession:this.state.hoursPerLession}}}  name="" type="submit" id="checkinfotuition" className="btn btn-primary " href="#" >Check info tuition</Link>

                <a  name="" type="submit" id="update_avatar" className="btn btn-primary " href="#" onClick={(preferDay,periodeStart,academicLevel,lessionsPerCourse,hoursPerLession,hourStart) =>this.props.dataAddtuition(this.state.preferDay,this.state.periodeStart,this.state.academicLevel,this.state.lessionsPerCourse,this.state.hoursPerLession,this.state.hourStart)}>Add Tuition Schedule</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Bodyaddtuition;