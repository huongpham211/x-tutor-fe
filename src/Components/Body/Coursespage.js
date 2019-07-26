import React, { Component } from 'react';

class coursespage extends Component {
    render() {
        return (
            <div className="col-md-3 col-xs-6">
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
                <h1>$32.5</h1>
              </div>
            </div>
          </div>
        );
    }
}

export default coursespage;