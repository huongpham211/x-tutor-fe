import React, { Component } from 'react';

class Page404 extends Component {
    render() {
        return (
            <div className="body">
            <div className="animationload">
              <div className="loader" />
            </div>
            <div id="wrapper">
              <div className="container">
                <div className="info">
                  <h1>Opps! <br />You have some <br />problems</h1>
                  <p>The page you are looking for was moved, removed, renamed or <br />might never existed.</p>
                  <a href="/" className="btn">Go home</a>
                </div>
                <div className="giraffe">
                  <div className="eye" />
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Page404;