import React, { Component } from 'react';
import axios from '../../axios';
class Bodydetailcourses extends Component {


    componentWillMount() {
        var config = {
            headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
        }
        axios
            .get(`api/v1/schedules/${this.props.idcourses}/sessions`, config)
            .then((res) => {
                this.setState({ datacourses: res.data });
            })
    }
    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Bodydetailcourses;