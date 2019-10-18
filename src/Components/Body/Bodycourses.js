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
        (<Coursespage
            key={index}
            iduser={info.id}
            courseName={info.course}
            academicLevel={info.academicLevel}
            price={info.price}
            name={info.firstName}
          />)
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