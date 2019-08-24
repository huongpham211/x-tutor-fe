import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class coursespage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      idtutor:this.props.index
    }
  }
  
  render() {
    return (
      <Link to={`/tutor_profile/${this.state.idtutor}`} className="col-md-3 col-xs-6">
        <div className="your-courses1">
          <img src={require('../img/625204_436a_2.jpg')} alt="" />
          <div className="outside">
            <h2 className="title">{this.props.courseName}</h2>
            <h3 className="author">{this.props.tuitor}</h3>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h1>{this.props.price}</h1>
          </div>
        </div>
      </Link>
    );
  }
}

export default coursespage;