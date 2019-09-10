import React, { Component } from 'react';
import Coursespage from './Coursespage';
import axios from '../../axios';
class Bodycoursestutor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datacourses:''
        }
    }

    componentWillMount() {
        var config = {
            headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
        }
        axios
            .get(`api/v1/users/${this.props.iduser}`, config)
            .then((res) => {
                this.setState({ datacourses: res.data.userFound.tutorData.teachingSubject });
            })
    }
    
    coursestutor(){
        if(this.state.datacourses.length > 0){
            return this.state.datacourses.map((value,key)=>(
                <Coursespage
                key={key}
                iduser={this.state.iduser}
                courseName={value.course}
                academicLevel={value.academicLevel}
                idcourse={value._id}
              />
            ))
        }
    }
    render() {
        return (
            <div className="mb-5 container">
            <div className="top-course row">
                {this.coursestutor()}
            </div>
        </div>
        );
    }
}

export default Bodycoursestutor;