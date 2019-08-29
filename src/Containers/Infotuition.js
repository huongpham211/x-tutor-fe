import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Infotuition extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            feePerHour:props.location.feePerHour.feePerHour,
            idtuition:props.location.idtuition.idtuition,
            feeTotal:props.location.feeTotal.feeTotal,
            lessionsPerCourse:props.location.lessionsPerCourse.lessionsPerCourse,
            hoursPerLession:props.location.hoursPerLession.hoursPerLession,
            idtutor:this.props.match.params.id,
            courseName:props.location.courseName.courseName,
            iduser:props.location.iduser.iduser
        }
    }
    render() {
            
        return (
            <div className="bglogin">
            <form action="" className="login-form2">
                <h1>Add Schedule</h1>
               
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
                </div>
                <div className="md-form my-4">
                  <h3 id="payper1">Pay all lessons</h3>
                  <div className="ttin_trai d-flex justify-content-between">
                    <div className="ttin_chung ">
                      <h4>Fee per hour:</h4>
                      <h4>Hour prer lesson:</h4>
                      <h4>Lessons per course:</h4>
                      <h4>Fee per course:</h4>
                     
                    </div>
                    <div className="ttin_phai">
                      <h4>{this.state.feePerHour}</h4>
                      <h4>{this.state.hoursPerLession}</h4>
                      <h4>{this.state.lessionsPerCourse}</h4>
                      <h4>{this.state.feeTotal}</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* het modal body */}
              <div className="modal-footer d-flex justify-content-center ">
                <Link to={{pathname:`/checkout/${this.state.idtuition}`,courseName:{courseName:this.state.courseName},iduser:{iduser:this.state.iduser},feeTotal:{feeTotal:this.state.feeTotal},idtutor:{idtutor:this.state.idtutor}}}  name="" id="add2" className="btn btn-primary" role="button">Book Tuition</Link>
              </div>
            </form>
        </div>
          
        );
    }
}

export default Infotuition;