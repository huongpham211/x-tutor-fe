import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <div>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 first">
                  <h3>X-Tutor</h3>
                  <p>Edugate is a great start for an education
                    personnel or organization to start the
                    online business with 1 Click.</p>
                  <i className="fas fa-envelope"><span>abc@xtutor.com</span></i> 
                  <i className="fas fa-mobile-alt"><span>0123456789</span></i>
                  <i className="fas fa-map-marker-alt"><span>99 Barnard St - Suite 111 United States - GA 22222</span></i>
                </div>
                <div className="col-md-4 second">
                  <h3>Gallery</h3>
                  <div className="gallery">                       
                    <img src={require('./img/bw7.jpg')} alt="" />
                    <img src={require('./img/bw7.jpg')} alt="" />
                    <img src={require('./img/bw7.jpg')} alt="" />
                    <img src={require('./img/bw7.jpg')} alt="" />
                    <img src={require('./img/bw7.jpg')} alt="" />
                    <img src={require('./img/bw7.jpg')} alt="" />
                    <img src={require('./img/bw7.jpg')} alt="" />
                    <img src={require('./img/bw7.jpg')} alt="" />
                                    
                  </div>
                </div>
                <div className="col-md-4 third">
                  <h3>Maling</h3>
                  <p>Sign up for our mailing list to get latest 
                    updates and offers.</p>
                  <input type="text"  placeholder="" />
                  <i className="fas fa-check" />
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container text-center">
              <p>@Copyright 2019 | X-Tutor Theme by X-Tutor Team | All Rights Reserved | Powered by WordPress</p>
            </div>
          </footer>
        </div>
          
        );
    }
}

export default Footer;