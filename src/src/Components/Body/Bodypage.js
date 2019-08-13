import React, { Component } from 'react';
import Coursespage from './Coursespage';
import { Link } from 'react-router-dom';
import axios from '../../axios';

class Bodypage extends Component {
  constructor(props, context) {
    super(props, context);
    
    //   const data = this.props.dataTutor
    //   const test = data.map((value) =>{
    //   return {
    //     key:value._id,
    //     name:value.firstName + value.lastName,
    //     teachingSubject:value.tutorData.teachingSubject(subject =>{
    //       return {keys:subject._id,course:subject.couse}
    //     })
    //   }
    // });
    // this.state = {
    //   list:test
    // }
  }

  

  componentWillMount() {
    var config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('signJwt')}
    };
    axios
    .get(`api/v1/users/all-tutors`,config)
    .then((response) =>{
       this.setState({
           dataDb:response.data.allTutor
       });
    })
    .catch(err => console.log(err));
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
              <h4>Top tutor in X-Tutor</h4>
            </div>
            <div className="top-course row">
              {this.printData()}
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Bodypage;