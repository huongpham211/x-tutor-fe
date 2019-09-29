import React, { Component } from 'react';
import Coursespage from './Coursespage';
import axios from '../../axios';
class Bodypage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataDb: '',
      nameTutor: null,
      iduser:this.props.iduser
    }

  }

  


  componentWillMount(){
  
       axios
       .get(`api/v1/users/all-tutors`)
        .then((response) =>{ 
            this.setState({
                dataDb:response.data.allTutor
            })
        })
        .catch(err =>console.log(err));
   }

   
  

  test() {
    if (this.state.dataDb.length > 0) {
      return this.state.dataDb.map((info,index) =>(
        <>   
          {info.tutorData.teachingSubject.map((value, key) => (
          <Coursespage
            key={key}
            iduser={this.state.iduser}
            courseName={value.course}
            academicLevel={value.academicLevel}
            idcourse={value._id}
            index={info._id}
            name={info.firstName + info.lastName}
          />
        ))}
        </>
      )
       

      )
    }
  }


  // printData = () => this.props.dataCourseProps.map((value, key) =>
  //   (<Coursespage
  //     key={key}
  //     courseName={value.course_name}
  //     tuitor={value.tuitor}
  //     price={value.price}
  //   />)
  // )
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
              <div className="col-lg-2 col-xs-6">Language</div>
              <div className="col-lg-2 col-xs-6">Software</div>
              <div className="col-lg-2 col-xs-6">Web develope</div>
              <div className="col-lg-2 col-xs-6">Photography</div>
              <div className="col-lg-2 col-xs-6">Business</div>
              <div className="col-lg-2 col-xs-6">Social media</div>
            </div>
          </div>
        </div>
        <div className="learn_skill text-center">
          <div className="anh1" />
          <div className="outside1" />
          <h4>Learn a new skill online on your time</h4>
          <h5>Be educated, be a good achiever.</h5>
        </div>
      
        <div className="top-courses1">
          <div className="container">
            <div className="title">
              <h4>Top courses in X-Tutor</h4>
            </div>
            <div className="top-course row">
              {this.test()}
              {/* {this.printData()} */}
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Bodypage;