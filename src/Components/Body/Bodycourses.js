import React, { Component } from 'react';

import Coursespage from './Coursespage';


class Bodycourses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            iduser:this.props.iduser
        }
    }
    


      printData = () =>    this.props.dataCourseProps.map((info,index) =>(
        <>   
          {info.tutorData.teachingSubject.map((value, key) => {
              if(value.course.toLowerCase().indexOf(this.props.checkConnectProps.toLowerCase()) !== -1  ){
               return (<Coursespage
                key={key}
                iduser={this.state.iduser}
                courseName={value.course}
                academicLevel={value.academicLevel}
                idcourse={value._id}
                index={info._id}
                name={info.firstName + info.lastName}
          />)
              }
          
            })}
        </>
      )      
      )

    
    render() {
        console.log(this.props.checkConnectProps);
        
        return (
            <div>
                <div className="top-courses1">
                    <div className="container">
                        <div className="title">
                            <h4>Top courses in X-Tutor</h4>
                        </div>
                        <div className="top-course row">
                            {this.printData()}
                            {/* {this.filterCourse()} */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bodycourses;