import React, { Component } from 'react';
import axios from '../../axios';
import Coursespage from './Coursespage';

class Bodyhome extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataDb: '',
    }
  }


  componentWillMount() {

    axios
      .get(`api/v1/users/all-tutors`)
      .then((response) => {
        this.setState({
          dataDb: response.data.allTutor
        })
      })
      .catch(err => console.log(err));
  }


  test() {
    if (this.state.dataDb.length > 0) {
      return this.state.dataDb.map((info,index) =>(
        <>   
          {info.tutorData.teachingSubject.map((value, key) => (
          <Coursespage
            key={key}
            courseName={value.course}
            academicLevel={value.academicLevel}
            price={value.price}
            index={info._id}
            name={info.firstName + info.lastName}
          />
        ))}
        </>
      )      
      )
    }
  }




  render() {

    return (
      <div>
        <div className="slogan text-center">
          <div className="container">
            <h3>You only have to know one thing</h3>
            <h1>You can learn anything</h1>
            <h4>For everyone</h4>
            <button name="" id="" className="btn btn-primary" href="" >Start Learning Now</button>
          </div>
        </div>
        <div className="choose-courses">
          <div className="container">
            <div className="title text-center">
              <h4>CHOOSE YOUR COURSE</h4>
              <h2>GET THE WORLD CLASS &amp; VERIFIED COURSE</h2>
              <div className="icon">
                <i className="far fa-money-bill-alt" />
                <span />
                <span />
              </div>
            </div>
            <div className="container">
              <div className="choose-course row">
                <div className="col-md-4 col-sm-6 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-microphone" />
                    </div>
                  </div>
                  <h3>Language</h3>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-compact-disc" />
                    </div>
                  </div>
                  <h3>Software</h3>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-desktop" />
                    </div>
                  </div>
                  <h3>Web Develope</h3>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-camera-retro" />
                    </div>
                  </div>
                  <h3>Photography</h3>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-money-bill-alt" />
                    </div>
                  </div>
                  <h3>Business</h3>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-comments" />
                    </div>
                  </div>
                  <h3>Social Media</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="button"><i className="fas fa-sort-up" /></button>
        {/* end choose courses */}
        <div className="fact text-center">
          <div className="container">
            <div className="content">
              <h1>SOME IMPORTANT FACTS ABOUT US</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique ipsum id, modi incidunt el</p>
            </div>
            <div className="group-button">
              <button name="" id="" className="btn btn-warning" href="">Purchase Courses</button>
              <button name="" id="" className="btn btn-primary" href="">Start Learning Now</button>
            </div>
          </div>
        </div>
        {/* end fact */}
        <div className="top-courses">
          <div className="title text-center">
            <h4>CHOOSE YOUR COURSE</h4>
            <h2>THE TOP POPULAR COURSES FOR YOU</h2>
            <div className="icon">
              <i className="far fa-money-bill-alt" />
              <span />
              <span />
            </div>
          </div>
          <div className="container">
            <div className="top-course row">
              {this.test()}
            </div>
          </div>
        </div>
        {/* end top-courses */}
        <div className="why">
          <div className="container">
            <div className="noname row">
              <div className="col-md-8 col-xs-12 left">
                <h1>WHY X-TUTOR?</h1>
                <p>There are many variations of passages of available, but the majority have suffered alteration
                  in some form,  by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                <button name="" id="" className="btn btn-primary" >Start Learning Now</button>
              </div>
              <div className="col-md-4 right">
                <img src={require('../img/girl-1.png')} alt="" />

              </div>
            </div>
          </div>
        </div>
        <div className="the-best text-center">
          <div className="title text-center">
            <h4>CHOOSE YOUR COURSE</h4>
            <h2>THE TOP POPULAR TUTOR FOR YOU</h2>
            <div className="icon">
              <i className="far fa-money-bill-alt" />
              <span />
              <span />
            </div>
          </div>
          <div className="container">
            <div className="learn-best row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>



            </div>
          </div>
        </div>
        <div className="structor">
          <div className="container">
            <div className="become row">
              <div className="col-md-8 left">
                <h2>BECOME AN INSTRUCTOR</h2>
                <h3>Join thousand of instructors and earn money hassle free!</h3>
              </div>
              <div className="col-md-4 right">
                <button name="" id="" className="btn btn-primary" >Start Learning Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Bodyhome;