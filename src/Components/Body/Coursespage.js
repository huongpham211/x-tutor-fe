import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class coursespage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      iduser:this.props.index
    }
  }
  
  render() {
    return (
      <Link to={{pathname:`/tutor_profile/${this.props.idtutor}`,iduser:{iduser:this.props.iduser},courseName:{courseName:this.props.courseName}}}  className="col-lg-3 col-md-4 col-sm-6">
        <div className="your-courses1">
          <img src={require('../img/625204_436a_2.jpg')} alt="" />
          <div className="outside">
            <h2 className="title">{this.props.courseName}</h2>
            <h3 className="author">{this.props.name}</h3>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h1>{this.props.academicLevel}</h1>
          </div>
        </div>
      </Link>
    );
  }
}

export default coursespage;