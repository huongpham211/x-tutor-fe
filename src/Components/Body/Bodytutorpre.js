import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Bodytuitionpre extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      aboutme: '',
      hourlyrate: '',
      major: '',
      institute: '',
      certificate: '',
      year: '',
      experience: '',
      course: '',
      feePerHour: '',
      academicLevel: '',
      note: '',
      basedIn: '',
      someinfo: [{ major: '', institute: '', certificate: '' }],
      workingexp: [{ year: '', experience: '', description: '' }],
      teachingSubject: [{ course: '', academicLevel: '', feePerHour: '' }]
    }
  }

  onStartDate(date) {
    this.setState({
      periodeStart:date
    });
  }
  

  onEndDate(date) {
    this.setState({
      periodeEnd:date
    });
  }

  onHourStart(e){
    this.setState({
      hourStart:Number(e.target.value)
    });
  }

  onHourEnd(e){
    this.setState({
      hourEnd:Number(e.target.value)
    });
  }

  addClick() {
    this.setState(prevState => ({
      someinfo: [...prevState.someinfo, { major: '', institute: '', certificate: '' }]
    }));
  }

  handleChange(i, e) {
    const { name, value } = e.target;
    let someinfo = [...this.state.someinfo];
    someinfo[i] = { ...someinfo[i], [name]: value };
    this.setState({ someinfo });
  }

  removeClick(i) {
    let someinfo = [...this.state.someinfo];
    someinfo.splice(i, 1);
    this.setState({ someinfo });
  }


  createUI() {
    return this.state.someinfo.map((el, i) => (
      <tbody key={i}>
        <tr>
          <td>
            <input type="text" name="major" className="form-control" value={el.major || ''} onChange={this.handleChange.bind(this, i)} />
          </td>
          <td>
            <input type="text" name="institute" className="form-control" value={el.institute || ''} onChange={this.handleChange.bind(this, i)} />
          </td>

          <td>
            <input type="text" name="certificate" className="form-control" value={el.certificate || ''} onChange={this.handleChange.bind(this, i)} />
          </td>

          <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
        </tr>
      </tbody>
    ))
  }

  addWorkingExp() {
    this.setState(prevState => ({
      workingexp: [...prevState.workingexp, { year: '', experience: '' }]
    }));
  }

  handleChangeWorkingEx(i, e) {
    const { name, value } = e.target;
    let workingexp = [...this.state.workingexp];
    workingexp[i] = { ...workingexp[i], [name]: value };
    this.setState({ workingexp });
  }


  removeWorkingExp(i) {
    let workingexp = [...this.state.workingexp];
    workingexp.splice(i, 1);
    this.setState({ workingexp });
  }

  createUI1() {
    return this.state.workingexp.map((el, i) => (
      <tbody key={i}>
        <tr>
          <td>
            <input type="text" name="year" className="form-control" value={el.year || ''} onChange={this.handleChangeWorkingEx.bind(this, i)} />
          </td>
          <td>
            <input type="text" name="experience" className="form-control" value={el.experience || ''} onChange={this.handleChangeWorkingEx.bind(this, i)} />
          </td>

          <td>
            <input type="text" name="description" className="form-control" value={el.description || ''} onChange={this.handleChangeWorkingEx.bind(this, i)} />
          </td>

          <input type='button' value='remove' onClick={this.removeWorkingExp.bind(this, i)} />
        </tr>
      </tbody>
    ))
  }

  addTeachingSubject() {
    this.setState(prevState => ({
      teachingSubject: [...prevState.teachingSubject, { course: '', academicLevel: '', feePerHour: '' }]
    }));
  }

  handleChangeTeachingSubject(i, e) {
    const { name, value } = e.target;
    let teachingSubject = [...this.state.teachingSubject];
    teachingSubject[i] = { ...teachingSubject[i], [name]: value };
    this.setState({ teachingSubject });
  }

  removeTeachingSubject(i) {
    let teachingSubject = [...this.state.teachingSubject];
    teachingSubject.splice(i, 1);
    this.setState({ teachingSubject });
  }

  createUI2() {
    return this.state.teachingSubject.map((el, i) => (
      <tbody key={i}>
        <tr>
          <td>
            <input type="text" name="course" className="form-control" value={el.course || ''} onChange={this.handleChangeTeachingSubject.bind(this, i)} />
          </td>
          <td>
            <input type="mail" name="academicLevel" className="form-control" value={el.academicLevel || ''} onChange={this.handleChangeTeachingSubject.bind(this, i)} />
          </td>
          <td>
            <input type="mail" name="feePerHour" className="form-control" value={el.feePerHour || ''} onChange={this.handleChangeTeachingSubject.bind(this, i)} />
          </td>
          <input type='button' value='remove' onClick={this.removeTeachingSubject.bind(this, i)} />
        </tr>
      </tbody>
    ))
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

  // onYear(e){
  //   this.setState({
  //     year:e.target.value
  //   });
  // }

  // onExperience(e){
  //   this.setState({
  //     experience:e.target.value
  //   });
  // }

  onBasesIn(e) {
    this.setState({
      basedIn: e.target.value
    });
  }

  // onCourse(e){
  //   this.setState({
  //     course:e.target.value
  //   });
  // }

  // onAcademicLevel(e){
  //   this.setState({
  //     academicLevel:e.target.value
  //   });
  // }
  // onNote(e){
  //   this.setState({
  //     note:e.target.value
  //   });
  // }

  render() {
    return (
      <div className="account-setting1">
        <div className="container">
          <div className="edit-info row">
            <div className="col-md-3 left">
              <form className="up" method="" encType="multipart/form-data">
                <div className="uploadava">
                  <img alt="" className="image" id="output" src={`http://localhost:3001${this.props.avatar}`} />
                  <input className="upload" type="file" name="avatar" id="fileInput" onChange={(e) => this.onAvatar(e)} required />
                </div>

                <h4 >{this.props.firstName} <span>{this.props.lastName}</span></h4>
              </form>
              <form id="introduce">
                <div className="aboutme">
                  <div className="tieude">
                    <h3>About me</h3>
                    <span></span>
                    <span></span>
                  </div>
                  <textarea name="" id="" onChange={(e) => this.onChangeAboutme(e)} value={this.state.aboutme}></textarea>
                </div>
                <div className="hourlyRate">
                  <div className="tieude">
                    <h3>Hourly Rate</h3>
                    <span></span>
                    <span></span>
                  </div>
                  <input type="text" placeholder="" onChange={(e) => this.onChangeHourlyRate(e)} />
                </div>
                <button name="" id="introduction" className="btn btn-primary" onClick={(aboutme, hourlyrate) => this.props.pushIntroduction(this.state.aboutme, this.state.hourlyrate)}>Update Introduction</button>
              </form>
            </div>

            <div className="col-md-9 right">
              <div className="preference">
                <div className="tieude">
                  <div className=" second ">
                    <i className="fas fa-chalkboard-teacher" />
                    <h5 className="col-md-10">Tuition preference</h5>
                  </div>
                </div>
                <form id="freetime">
                <div className="col-lg-6 form-group change">
                      <label htmlFor="">Start date</label>
                      {/* <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onStartDate(e)}/> */}
                      <DatePicker
                        selected={this.state.periodeStart}
                        onChange={(date) => this.onStartDate(date)}
                      />
                    </div>
                    
                <div className="col-lg-6 form-group change">
                      <label htmlFor="">End date</label>
                      {/* <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onStartDate(e)}/> */}
                      <DatePicker
                        selected={this.state.periodeEnd}
                        onChange={(date) => this.onEndDate(date)}
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label htmlFor="">Hour start</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onHourStart(e)}/>
                    </div>
                    <div className="col-lg-6 form-group">
                      <label htmlFor="">Hour end</label>
                      <input type="text" className="form-control" name="start_date" id="start_date" aria-describedby="helpId" placeholder="" onChange={(e) => this.onHourEnd(e)}/>
                    </div>
                    <a  name="" type="submit" id="update_avatar" className="btn btn-primary " href="#" onClick={(periodeStart,periodeEnd,hourStart,hourEnd) =>this.props.freetime(this.state.periodeStart,this.state.periodeEnd,this.state.hourStart,this.state.hourEnd)}>Add Tuition Schedule</a>

                </form>
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
                      {this.createUI()}

                      <tfoot>
                        <tr>
                          <td style={{ textAlign: 'left' }}>
                            <input type="submit" className="btn logbtn save_info" id="" value="Save Info" onClick={(someinfo) => this.props.pushEducation(this.state.someinfo)} />
                            <input type="button" className="btn add_row" id="addrow" value="Add Row" onClick={this.addClick.bind(this)} />
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
                        <th style={{ width: '30%' }}>Year</th>
                        <th style={{ width: '30%' }}>Experience</th>
                        <th style={{ width: '30%' }}>Description</th>
                        <th style={{ width: '10%' }} />
                      </tr>
                    </thead>
                    {/* <tbody>
                      <tr>
                        <td>
                          <input type="text" name="year" className="form-control" onChange={(e) => this.onYear(e)}/>
                        </td>
                        <td>
                          <input type="mail" name="experience" className="form-control" onChange={(e) => this.onExperience(e)}/>
                        </td>
                        <td className="col-sm-2"><button className="deleteRow" />
                        </td>
                      </tr>
                    </tbody> */}
                    {this.createUI1()}
                    <tfoot>
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <input type="submit" className="btn logbtn save_info" id="" value="Save Info" onClick={(workingexp) => this.props.pushworkingExperience(this.state.workingexp)} />
                          <input type="button" className="btn add_row" id="addrow1" value="Add Row" onClick={this.addWorkingExp.bind(this)} />
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
                          <input type="text" name="bases in" className="form-control" onChange={(e) => this.onBasesIn(e)} />

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
                    {/* <tbody>
                      <tr>
                        <td>
                          <input type="text" name="course" className="form-control" onChange={(e) => this.onCourse(e)} />
                        </td>
                        <td>
                          <input type="mail" name="academic" className="form-control" onChange={(e) => this.onAcademicLevel(e)} />
                        </td>
                        <td>
                          <input type="mail" name="feeperhour" className="form-control" onChange={(e) => this.onNote(e)} />
                        </td>
                        <td className="col-sm-2"><a className="deleteRow2" />
                        </td>
                      </tr>
                    </tbody> */}
                    {this.createUI2()}
                    <tfoot>
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <input type="submit" className="btn logbtn save_info" id="" value="Save Info" onClick={(basedIn, teachingSubject) => this.props.pushTeachingSubject(this.state.basedIn, this.state.teachingSubject)} />
                          <input type="button" className="btn " id="addrow2" defaultValue="Add Row" onClick={this.addTeachingSubject.bind(this)} />
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