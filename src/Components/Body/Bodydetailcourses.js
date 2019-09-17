import React, { Component } from 'react';
import axios from '../../axios';
class Bodydetailcourses extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      courseCode: [],
      periodeStart: [],
      periodeEnd: [],
      datacourses: []

    }
  }


  componentWillMount() {
    var config = {
      headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
    }
    axios
      .get(`api/v1/schedules/${this.props.idcourses}/sessions`, config)
      .then((res) => {
        this.setState({ datacourses: res.data.sessions });
      })
  }

  componentDidMount() {
    var config = {
      headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
    }
    axios
      .get(`api/v1/schedules/${this.props.idcourses}`, config)
      .then((res) => {
        this.setState({
          courseCode: res.data.tuiSchedule.courseCode,
          lessionsPerCourse: res.data.tuiSchedule.lessionsPerCourse,
          hourStart: res.data.tuiSchedule.hourStart,
          hourEnd: res.data.tuiSchedule.hourEnd,
          periodeStart: ((new Date(res.data.tuiSchedule.periodeStart).toLocaleDateString())),
          periodeEnd: ((new Date(res.data.tuiSchedule.periodeEnd).toLocaleDateString()))
        });
      })
  }

  mapsession() {
    if (this.state.datacourses.length > 0) {
      return this.state.datacourses.map((value, key) => (
        <div className="col-lg-3" key={key}>
          <div id="onesession">
            <h3>{value.nameOfSession}</h3>
            <h3>{value.scheduleId.hourStart}:00 - {value.scheduleId.hourEnd}:00</h3>
            <h3>{(new Date(value.date).toLocaleDateString())}</h3>
          </div>
        </div>
      ))
    }
  }



  render() {
    return (
      <div className="detail_course">
        <div className="container">
          <div className="detail_up">
            <div class="media">
              <div class="media-left">
                <span class="icon-block">
                  <i class="fab fa-css3-alt"></i>
                </span>
              </div>
              <div className="media-body">
                <h1>MathP1-21012312312-12312312</h1>
                <p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </div>
            </div>
            <table>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}><i className="fas fa-graduation-cap" />Subject</td>
                  <td style={{ width: '70%' }}>{this.state.courseCode}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td style={{ width: '25%' }}><i className="fas fa-book" />No.of lessions</td>
                  <td style={{ width: '5%' }}>{this.state.lessionsPerCourse}</td>
                  <td style={{ width: '15%' }}><i className="fas fa-calendar-week" />Date</td>
                  <td style={{ width: '30%' }}>{this.state.periodeStart} - {this.state.periodeEnd}</td>
                  <td style={{ width: '15%' }}><i className="fas fa-clock" />Time</td>
                  <td style={{ width: '10%' }}>{this.state.hourStart}:00 - {this.state.hourEnd}:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="detail_down">
            <h3>Course details</h3>
            <div className="page-section">
              <div className="paragraph-inline">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/knW7-x7Y7RE" />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam autem cumque deleniti dicta
                iusto laboriosam laudantium omnis, possimus praesentium provident quam quas, sapiente sint, ut!
                Adipisci aliquid assumenda consequuntur cupiditate deleniti dicta dolore dolorem dolores enim
                eos hic illo inventore iure libero magnam minima minus obcaecati optio pariatur porro quibusdam
    quos reiciendis, sapiente sint veritatis. Eveniet in magni sunt?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam autem cumque deleniti dicta
                iusto laboriosam laudantium omnis, possimus praesentium provident quam quas, sapiente sint, ut!
                Adipisci aliquid assumenda consequuntur cupiditate deleniti dicta dolore dolorem dolores enim
    eos hic illo inventore iure libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam autem cumque deleniti dicta
                iusto laboriosam laudantium omnis, possimus praesentium provident quam quas, sapiente sint, ut!
                Adipisci aliquid assumenda consequuntur cupiditate deleniti dicta dolore dolorem dolores enim
                eos hic illo inventore iure libero magnam minima minus obcaecati optio pariatur porro quibusdam
                quos reiciendis, sapiente sint veritatis. Eveniet in magni sunt?
  </p>
            </div>

            <div className="session">
              <div className="title">
                <h4>{this.state.courseCode}</h4>
              </div>
              <div className="sessions row">
                {this.mapsession()}
                {/* <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div id="onesession">
                        <h3>Session 1</h3>
                        <h3>8:00 - 10:00</h3>
                        <h3>2019-09-11</h3>
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
          {/* end detail_down */}
        </div>
      </div>
    );
  }
}

export default Bodydetailcourses;