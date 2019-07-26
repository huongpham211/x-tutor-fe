import React, { Component } from 'react';

class Bodyaddtuition extends Component {
  render() {
    return (
      <div>
        <div className="modal fade" id="add_schedule" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">x</span>
                </button>
                
              </div>
              {/* modal header */}
              <div className="modal-body text-center">
                <div className="md-form my-4">
                  <input type="email" id="defaultForm-email" className="form-control validate" placeholder=" Enter your emai" />
                </div>
                <div className="md-form mb-2">
                  <input type="password" id="defaultForm-pass" className="form-control validate" placeholder="Enter your password" />
                </div>
                
              </div>
              <div className="modal-footer d-flex justify-content-center ">
                <a name="" id="" className="btn btn-primary" href="#" role="button">Login</a>
              </div>
              <h5 className="text-center mb-3">Not a member ?<span>Sign up now</span></h5>
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
              <form id="tuition_schedule">
                <div className=" tren1">
                  <h3>Preferred day *</h3>
                  <div className="checkbox">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Monday</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Tuesday</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Wednesday</label>
                    </div>

                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Thursday</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Friday</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Saturday</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Sunday</label>
                    </div>

                  </div>
                </div>
                <div className="duoi1 row">
                  <div className="col-md-6 trai">
                    <div className="form-group">
                      <label htmlFor="">Start date*</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" />
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
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Last lesson</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Hours per session</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" />
                    </div>
                  </div>
                </div>
              </form>
              <div className="save_info d-flex justify-content-center">
                <a name="" id="update_avatar"  data-toggle="modal" data-target="#add_schedule" className="btn btn-primary " href="#" role="button">Add Tuition Schedule</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Bodyaddtuition;