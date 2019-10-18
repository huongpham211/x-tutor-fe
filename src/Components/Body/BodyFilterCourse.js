import React, { Component } from 'react';

import Coursespage from './Coursespage';


class Bodycourses extends Component {
    filterCourse = () =>  this.props.courseFilter.map((value,key)=>(
                     (<Coursespage
                    key={key}
                    courseName={value.course}
                    academicLevel={value.academicLevel}
                    price={value.price}
                    name={value.firstName}
                  />)
        )
        
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
                            {this.filterCourse()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bodycourses;