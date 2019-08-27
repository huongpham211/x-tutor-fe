import React, { Component } from 'react';

import Coursespage from './Coursespage';


class Bodycourses extends Component {
    filterCourse = () =>  this.props.courseFilter.map((value,key)=>(
        <>
        {value.tutorData.teachingSubject.map((info,index) =>{
        
                return  (<Coursespage
                    key={key}
                    courseName={info.course}
                    academicLevel={info.academicLevel}
                    price={value.price}
                    name={value.firstName + value.lastName}
                  />)
            }
        )}
            </>
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