import React, { Component } from 'react';
import axios from '../../axios';
import Coursesstudent from './Coursesstudent';

class Bodyyourcourses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datacourses: ''
        }
    }


    componentWillMount() {
        var config = {
            headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
        }
        axios
            .get(`api/v1/users/${this.props.iduser}/tuition-schedules`, config)
            .then((res) => {
                this.setState({ datacourses: res.data.allSchedules });
            })
    }

    yourcourses() {
        if (this.state.datacourses.length > 0) {
            return this.state.datacourses.map((value, key) => (
                <Coursesstudent
                    key={key}
                    iduser={this.props.iduser}
                    courseCode={value.courseCode}
                    tuitionStatus={value.tuitionStatus}
                    academicLevel={value.academicLevel}
                    idcourse={value._id}
                    periodeStart={(new Date(value.periodeStart).toLocaleDateString())}
                    periodeEnd={(new Date(value.periodeEnd).toLocaleDateString())}
                />
            ))
        }
    }

    render() {
        return (
            <div className="mb-5 container">
                <div className="top-course row">
                    {this.yourcourses()}
                </div>
            </div>

        );
    }
}

export default Bodyyourcourses;