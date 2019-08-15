import React, { Component } from 'react';
import Coursespage from './Coursespage';
import { map } from 'lodash';
import axios from '../../axios';
import {Link} from 'react-router-dom'
class Bodypage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataDb: '',
      nameTutor: null
    }

  }

  


  componentWillMount(){
    var config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
    };
       axios
       .get(`api/v1/users/all-tutors`,config)
        .then((response) =>{ 
            this.setState({
                dataDb:response.data.allTutor
            })
        })
        .catch(err =>console.log(err));
   }

   getData() {
    if (this.state.dataDb.length > 0) {
      return this.state.dataDb.map(value =>
        value.tutorData.teachingSubject.map((value, key) => (
          <Coursespage
            key={key}
            courseName={value.course}
            tuitor={value.academicLevel}
            price={value.price}
          />
        ))

      )
    }
  }
  

  test() {
    if (this.state.dataDb.length > 0) {
      return this.state.dataDb.map((value,key) =>(
        <Link key={key} to={`/tutor_profile/${value._id}`}>   
          {value.tutorData.teachingSubject.map((value, key) => (
          <Coursespage
            key={key}
            courseName={value.course}
            tuitor={value.academicLevel}
            price={value.price}
          />
        ))}
        </Link>
      )
       

      )
    }
  }


  printData = () => this.props.dataCourseProps.map((value, key) =>
    (<Coursespage
      key={key}
      courseName={value.course_name}
      tuitor={value.tuitor}
      price={value.price}
    />)
  )
  render() {
    // if (this.state.dataDb.length > 0) {
    //   const polls = this.state.dataDb
    //   polls.map((poll, index) => {
    //     console.log(poll._id, poll.tutorData)
    //   });
    // }
  

    return (

      <div>

        <div className="coursess">
          <div className="container">
            <div className="subject">
              <div>Language</div>
              <div>Software</div>
              <div>Web develope</div>
              <div>Photography</div>
              <div>Business</div>
              <div>Social media</div>
            </div>
          </div>
        </div>
        <div className="learn_skill text-center">
          <div className="anh1" />
          <div className="outside1" />
          <h4>Learn a new skill online on your time</h4>
          <h5>57,000 Online Courses</h5>
        </div>
        <div className="top-courses1">
          <div className="container">
            <div className="title">
              <h4>Top courses in X-Tutor</h4>
            </div>
            <div className="top-course row">
              {this.test()}
              {this.printData()}
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Bodypage;