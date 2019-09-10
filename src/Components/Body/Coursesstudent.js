import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Coursesstudent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
     
    }
  }
  
  render() {
    return (
      <Link to={{pathname:`/detailcourses/${this.props.idcourse}`,iduser:{iduser:this.props.iduser}}}  className="col-lg-3 col-md-4 col-sm-6">
        <div className="your-courses1">
          <img src={require('../img/625204_436a_2.jpg')} alt="" />
          <div className="outside">
            <h2 className="title">{this.props.courseCode}</h2>
            <h3 className="author">{this.props.tuitionStatus}</h3>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h1>{this.props.periodeStart} - {this.props.periodeEnd}</h1>
          </div>
        </div>
      </Link>
    );
  }
}

export default Coursesstudent;