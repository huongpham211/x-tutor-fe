import React, { Component } from 'react';

import Coursespage from './Coursespage';


class Bodycourses extends Component {
      printData = () =>  this.props.dataCourseProps.map((value,key)=>
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
                <div className="top-courses1">
                    <div className="container">
                        <div className="title">
                            <h4>Top courses in X-Tutor</h4>
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

export default Bodycourses;