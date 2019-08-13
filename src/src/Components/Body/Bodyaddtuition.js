import React, { Component } from 'react';

class Bodyaddtuition extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      periodeStart:'',
      lessionsPerCourse:'',
      hoursPerLession:'',
      hourStart:''
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

  onStartDate(e) {
    this.setState({
      periodeStart:e.target.value
    });
  }
  
  onLessionsPerCourse(e) {
    this.setState({
      lessionsPerCourse:e.target.value
    });
  }

  onHoursPerLession(e) {
    this.setState({
      hoursPerLession:e.target.value
    });
  }

  onHourStart(e){
    this.setState({
      hourStart:e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="modal fade" id="add_schedule" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Add Schedule</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              {/* het modal header */}
              <div className="modal-body text-center">
                <div className="md-form my-4" id="noclass">
                  <div className="khung">
                    <div id="time">10 Mar 18 - 10 Mar 18 <br />Every Saturdat 08:30 hrs - 09:30 hrs</div>
                    <div className="" id="button2">
                      <i className="fas fa-trash-alt" />
                      <i className="fas fa-edit" />
                    </div>
                  </div>
                  {/* end khung */}
                  <a name="" id="add" className="btn btn-primary" href="#" role="button">Add Schedule</a>
                </div>
                <div className="md-form my-4">
                  <h3 id="payper1">Pay per 1 lessons</h3>
                  <div className="ttin_trai d-flex justify-content-between">
                    <div className="ttin_chung ">
                      <h4>Fee per hour:</h4>
                      <h4>Fee per hour:</h4>
                      <h4>Fee per hour:</h4>
                      <h4>Fee per hour:</h4>
                      <h4>Fee per hour:</h4>
                    </div>
                    <div className="ttin_phai">
                      <h4>10</h4>
                      <h4>10</h4>
                      <h4>10</h4>
                      <h4>10</h4>
                      <h4>10</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* het modal body */}
              <div className="modal-footer d-flex justify-content-center ">
                <a name="" id="add2" className="btn btn-primary" href="#" role="button">Book Tuition</a>
              </div>
            </div>

          </div>
        </div>

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
                      <input type="checkbox" value="Wesneday" name="pet" />
                      Wesneday
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
                    <div className="form-group">
                      <label htmlFor="">Start date*</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onStartDate(e)}/>
                    </div>
                    <div className="form-check">
                      <label htmlFor="">Recurring</label>
                      <div id="radio">
                        <div className="col-md-2 radio">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
                          <label className="form-check-label" htmlFor="exampleRadios1">No</label>
                        </div>
                        <div className="col-md-2 radio">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
                          <label className="form-check-label" htmlFor="exampleRadios1">Yes</label>
                        </div>
                        <div className="col-md-8 radio">
                          <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                        </div>
                      </div>
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
                      <label htmlFor="">Last lesson</label>
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
                <a name="" type="submit" id="update_avatar" data-toggle="modal" data-target="#add_schedule" className="btn btn-primary " href="#" role="button" onClick={(preferDay,periodeStart,lessionsPerCourse,hoursPerLession,hourStart) =>this.props.dataAddtuition(this.state.preferDay,this.state.periodeStart,this.state.lessionsPerCourse,this.state.hoursPerLession,this.state.hourStart)}>Add Tuition Schedule</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Bodyaddtuition;