import React, { Component } from 'react';

class Bodytuitionpre extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      aboutme: '',
      hourlyrate: ''
    }
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

  render() {
    return (
      <div className="account-setting1">
        <div className="container">
          <div className="edit-info row">
            <div className="col-md-3 left">
              <div className="up text-center">
                <img src={require('../img/member6.jpg')} alt="" />
                <h5>Daniela Queen</h5>
              </div>
              <div id="introduce">
                <div id="about_me">
                  <textarea name="" id="" onChange={(e) => this.onChangeAboutme(e)} value={this.state.aboutme}></textarea>
                </div>
                <div id="hourlyrate">
                  <label htmlFor="">Hourly Rate</label>
                  <input type="text" placeholder="" onChange={(e) => this.onChangeHourlyRate(e)} />
                </div>
                <a name="" id="" className="btn btn-primary" href="#" role="button" onClick={(aboutme,hourlyrate) => this.props.pushIntroduction(this.state.aboutme,this.state.hourlyrate)}>Update Introduction</a>
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
                      <tbody>
                        <tr>
                          <td>
                            <input type="text" name="name" className="form-control" />
                          </td>
                          <td>
                            <input type="mail" name="mail" className="form-control" />
                          </td>

                          <td>
                            <input type="mail" name="mail" className="form-control" />
                          </td>

                          <td className="col-sm-2"><a className="deleteRow" />
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td style={{ textAlign: 'left' }}>
                            <input type="submit" className="btn save_info" id="" value="Save Info" />
                            <input type="button" className="btn add_row" id="addrow" value="Add Row" />
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
                  <table id="myTable" className=" table order-list noborder">
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
                          <input type="text" name="name" className="form-control" />
                        </td>
                        <td>
                          <input type="mail" name="mail" className="form-control" />
                        </td>
                        <td className="col-sm-2"><a className="deleteRow" />
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <input type="submit" className="btn save_info" id="" value="Save Info" />
                          <input type="button" className="btn add_row" id="addrow" value="Add Row" />
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
                          <select className="form-control" name="bases" id="bases">
                            <option className="maukhac">Singapore</option>
                            <option>Vietnam</option>
                            <option>Thailand</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table id="myTable" className=" table order-list2 noborder">
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>Course</th>
                        <th style={{ width: '30%' }}>Academic Level</th>
                        <th style={{ width: '20%' }}>Fee per hour</th>
                        <th style={{ width: '20%' }} />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="text" name="course" className="form-control" />
                        </td>
                        <td>
                          <input type="mail" name="academic" className="form-control" />
                        </td>
                        <td>
                          <input type="mail" name="Fee" className="form-control" />
                        </td>
                        <td className="col-sm-2"><a className="deleteRow2" />
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <input type="submit" className="btn save_info" id="" value="Save Info" />
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