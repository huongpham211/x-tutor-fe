import React, { Component } from 'react';
import axios from '../../axios';
class Bodytuitionpre extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      aboutme: '',
      hourlyrate: '',
      major:'',
      institute:'',
      certificate:'',
      year:'',
      experience:'',
      course:'',
      feePerHour:'',
      academicLevel:'',
      note:'',
      basedIn:'',
      // someinfo:this.props.tutorData
    }
  }

 
  
  addClick(){
    this.setState(prevState =>({
      someinfo:[...prevState.someinfo,{major:'',institute:'',certificate:''}]
    }));
  }

  createUI(){
    if(this.props.tutorData !== null){
      return this.props.tutorData.map((el, i) => (
        <tbody key={i}>
        <tr>
          <td>
            <input type="text" name="major" className="form-control" value={el.major ||''} onChange={this.handleChange.bind(this, i)}/>
          </td>
          <td>
            <input type="text" name="institute" className="form-control"value={el.institute ||''} onChange={this.handleChange.bind(this, i)}/>
          </td>
  
          <td>
            <input type="text" name="certificate" className="form-control" value={el.certificate ||''} onChange={this.handleChange.bind(this, i)}/>
          </td>
  
          <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
        </tr>
      </tbody>
        // <div key={i}>
        //    <input placeholder="First Name" name="firstName" value={el.firstName ||''} onChange={this.handleChange.bind(this, i)} />
        //    <input placeholder="Last Name" name="lastName" value={el.lastName ||''} onChange={this.handleChange.bind(this, i)} />
        //    <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
        // </div>          
      ))
    }
   
 }
 
 handleChange(i, e) {
    const { name, value } = e.target;
    let someinfo = [...this.props.tutorData];
    someinfo[i] = {...someinfo[i], [name]: value};
    this.setState({ someinfo });
 }
 
 removeClick(i){
    let someinfo = [...this.state.someinfo];
    someinfo.splice(i, 1);
    this.setState({ someinfo });
 }

  onChangeAboutme(e) {
    this.setState({
      aboutme: e.target.value
    });
  }

  onChangeHourlyRate(e) {
    this.setState({
      hourlyrate: Number(e.target.value)
    });
  }

  // onMajor(e){
  //   this.setState({
  //     major:e.target.value
  //   })
  // }

  // onInstitute(e){
  //   this.setState({
  //     institute:e.target.value
  //   });
  // }

  // onCertificate(e){
  //   this.setState({
  //     certificate:e.target.value
  //   });
  // }

  onYear(e){
    this.setState({
      year:e.target.value
    });
  }

  onExperience(e){
    this.setState({
      experience:e.target.value
    });
  }

  onBasesIn(e){
    this.setState({
      basedIn:e.target.value
    });
  }

  onCourse(e){
    this.setState({
      course:e.target.value
    });
  }

  onAcademicLevel(e){
    this.setState({
      academicLevel:e.target.value
    });
  }
  onNote(e){
    this.setState({
      note:e.target.value
    });
  }

  render() {
    return (
      <div className="account-setting1">
        <div className="container">
          <div className="edit-info row">
            <div className="col-md-3 left">
            <form className="up" method="" encType="multipart/form-data">
                <div className="uploadava">
                  <img alt="" className="image" id="output" src={`http://localhost:3000${this.props.avatar}`}/>
                  <input className="upload" type="file" name="avatar" id="fileInput" onChange={(e) => this.onAvatar(e)}  required />
                </div>

                <h4 >{this.props.firstName} <span>{this.props.lastName}</span></h4>
                <div className="setting_button">
                  <button name="" type="submit" id="update_avatar" className="btn btn-primary" onClick={(e) => this.props.passAvatar(this.state.avatar)}>Update Avatar</button>
                  <button name="" id="delete_avatar" className="btn btn-primary" >Delete</button>
                </div>
              </form>
              <div id="introduce">
                <div id="about_me">
                  <textarea name="" id="" onChange={(e) => this.onChangeAboutme(e)} value={this.state.aboutme}></textarea>
                </div>
                <div id="hourlyrate">
                  <label htmlFor="">Hourly Rate</label>
                  <input type="text" placeholder="" onChange={(e) => this.onChangeHourlyRate(e)} />
                </div>
                <button name="" id="" className="btn logbtn btn-primary" onClick={(aboutme,hourlyrate) => this.props.pushIntroduction(this.state.aboutme,this.state.hourlyrate)}>Update Introduction</button>
              </div>
            </div>

            <div className="col-md-9 right">
              <div className="preference">
                <div className="tieude">
                  <div className="col-md-6 second ">
                    <i className="fas fa-chalkboard-teacher" />
                    <h5>Tuition preference</h5>
                  </div>
                </div>
                {/* het tieude */}
                <div className="some_info">
                  <div className="tieude">
                    <h5>Some info</h5>
                  </div>
                  <form action="">
                    <table id="myTable" className=" table order-list noborder">
                      <thead>
                        <tr>
                          <th style={{ width: '30%' }}>Major</th>
                          <th style={{ width: '30%' }}>Institute</th>
                          <th style={{ width: '30%' }}>Certification</th>
                          <th style={{ width: '10%' }} />
                        </tr>
                      </thead>
                      {/* <tbody>
                        <tr>
                          <td>
                            <input type="text" name="major" className="form-control" onChange={(e) => this.onMajor(e)}/>
                          </td>
                          <td>
                            <input type="mail" name="institute" className="form-control" onChange={(e) => this.onInstitute(e)}/>
                          </td>

                          <td>
                            <input type="mail" name="certification" className="form-control" onChange={(e) => this.onCertificate(e)}/>
                          </td>

                          <td className="col-sm-2"><a className="deleteRow" />
                          </td>
                        </tr>
                      </tbody> */}
                      {this.createUI()}        

                      <tfoot>
                        <tr>
                          <td style={{ textAlign: 'left' }}>
                            <input type="submit" className="btn logbtn save_info" id="" value="Save Info" onClick={(someinfo) => this.props.pushEducation(this.state.someinfo)}/>
                            <input type="button" className="btn add_row" id="addrow" value="Add Row" onClick={this.addClick.bind(this)}/>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </form>
                </div>
              </div>
              {/* het preference */}
              <div className="teaching_ex">
                <div className="tieude">
                  <h5>Working Experience</h5>
                </div>
                <form action="">
                  <table id="myTable" className=" table order-list1 noborder">
                    <thead>
                      <tr>
                        <th style={{ width: '20%' }}>Year</th>
                        <th style={{ width: '60%' }}>Experience</th>
                        <th style={{ width: '20%' }} />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="text" name="year" className="form-control" onChange={(e) => this.onYear(e)}/>
                        </td>
                        <td>
                          <input type="mail" name="experience" className="form-control" onChange={(e) => this.onExperience(e)}/>
                        </td>
                        <td className="col-sm-2"><a className="deleteRow" />
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <input type="submit" className="btn logbtn save_info" id="" value="Save Info" onClick={(year,exprerience) => this.props.pushworkingExperience(this.state.year,this.state.experience)}/>
                          <input type="button" className="btn add_row" id="addrow1" value="Add Row" />
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </form>
              </div>
              {/* end teaching_ex */}
              <div className="teaching_subject">
                <div className="tieude">
                  <h5>Teaching Subject</h5>
                </div>
                <form action="">
                  <table id="myTable" className="table noborder">
                    <thead>
                      <tr>
                        <th style={{ width: '20%' }}>Based in</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                        <input type="text" name="bases in" className="form-control" onChange={(e) => this.onBasesIn(e)}/>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table id="myTable" className=" table order-list2 noborder">
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>Course</th>
                        <th style={{ width: '30%' }}>Academic Level</th>
                        <th style={{ width: '20%' }}>Note</th>
                        <th style={{ width: '20%' }} />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="text" name="course" className="form-control" onChange={(e) => this.onCourse(e)}/>
                        </td>
                        <td>
                          <input type="mail" name="academic" className="form-control" onChange={(e) => this.onAcademicLevel(e)}/>
                        </td>
                        <td>
                          <input type="mail" name="feeperhour" className="form-control" onChange={(e) => this.onNote(e)}/>
                        </td>
                        <td className="col-sm-2"><a className="deleteRow2" />
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <input type="submit" className="btn logbtn save_info" id="" value="Save Info" onClick={(basedIn,course,academicLevel,note) => this.props.pushTeachingSubject(this.state.basedIn,this.state.course,this.state.academicLevel,this.state.note)}/>
                          <input type="button" className="btn " id="addrow2" defaultValue="Add Row" />
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </form>
              </div>
              {/* end teaching_subject */}
            </div>
            {/* end right */}
          </div>
        </div>
      </div>

    );
  }
}

export default Bodytuitionpre;