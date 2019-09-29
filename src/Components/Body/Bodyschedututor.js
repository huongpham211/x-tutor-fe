import React, { Component } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

class Bodyschedututor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:[]
        }
    }
    
    componentDidMount() {
        var config = {
          headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
        }
        axios
          .get(`api/v1/users/${this.props.iduser}/tuition-schedules`, config)
          .then((res) => {
            this.setState({data:res.data.allSchedules}); 
          })
          .catch(err => console.log(err))
      }

      mapsession() {
        if (this.state.data.length > 0) {
          return this.state.data.map((value, key) => (
            <Link to={{pathname:`/detailcoursetutor/${value._id}`,iduser:{iduser:this.props.iduser}}} className="col-lg-3" key={key}>
              <div id="onesession">
                <h3>{value.courseCode}</h3>
                <h4>{value.hourStart}:00 - {value.hourEnd}:00</h4>
                <h4>{(new Date(value.periodeStart).toLocaleDateString())} - {(new Date(value.periodeEnd).toLocaleDateString())}</h4>
              </div>
            </Link>
          ))
        }
      }


    render() {
        return (
           
            <div className="scheduletutor">
                <div className="container">
                <div className="title">
                  <h3>All students schedules has enrolled </h3>
                  <h4>{this.props.courseName}</h4>
                </div>
                <div className="sessions row">
              
                {this.mapsession()}        
              </div>
                </div>  
            </div>
        );
    }
}

export default Bodyschedututor;