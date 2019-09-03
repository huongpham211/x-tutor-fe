import React, { Component } from 'react';

class Bodyaboutus extends Component {
    render() {
        return (
            <div className="about-us">
                <article>
                    <div className="h5 text-center text-uppercase">About us</div>
                    <h1 className="text-center">What We Do Everyday</h1>
                    <div className="section-under-title-line" />
                    <div className="text">
                        <p>Neque cursus curae ante scelerisque vehicula porttitor natoque risus vitae lacinia felis elit netus sed iaculis</p>
                        <p>interdum nullam sem habitasse vulputate reetturpis fringilla duis suspendisse arcu</p>
                        <p>Ullamcorper scelerisque elit quam dignissim velit lacus urna quam interdum quisque bibendum platea iaculis</p>
                        <p>blandit dapibus non natoque purus pellentesque</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis mauris nec lacus suscipit, et gravida</p>
                        <p>magna volutpat. Nullam consequat rhoncus lacinia. Ut rhoncus velit ut sem elementum porttitor.</p>
                    </div>
                </article>
                <article className="creative-team">
                    <div className="video-block">
                        <img src="https://bestwebsoft.com/demo_theme/hotel-finder/images/about-us-video.jpg" alt="" />
                        <div className="video-title">
                            <div className="button-play" />
                            <p className="title-first">
                                <b>Work hard. Travel simple.</b>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                    {/* end video block */}
                    <p className="text-center">
                        <i className="fas fa-users" />
                    </p>
                    <h1 className="text-center">Our Creative Team</h1>
                    <p className="small text-center">Neque cursus curae ante scelerisque vehicula porttitor natoque risus vitae lacinia felis elit</p>
                    <p className="small text-center">netus sed iaculis interdum nullam sem habitasse vulputate laoreet turpis fringilla duis suspendisse arcu</p>
                    <div className="row container">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="user-person-navigation">
                                <div className="user-avatar">
                                    <img src={require('../img/images.jfif')} alt="" />
                                </div>
                                <h3 className="user-name">Tung Tran</h3>
                                <h6 className="user-member-ship">design</h6>
                                <p className="text-center">
                                    Neque cursus curae ante scelei que vehicula porttitor natoque risus vitae lacinia felis elit netu
          </p>
                            </div>
                        </div>
                        {/* het 1col */}
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="user-person-navigation">
                                <div className="user-avatar">
                                    <img src={require('../img/52591385_1600705410072875_5485075121376854016_n.jpg')} alt="" />
                                </div>
                                <h3 className="user-name">Huong Pham</h3>
                                <h6 className="user-member-ship">Database</h6>
                                <p className="text-center">
                                    Neque cursus curae ante scelei que vehicula porttitor natoque risus vitae lacinia felis elit netu
          </p>
                            </div>
                        </div>
                        {/* het 1col */}
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="user-person-navigation">
                                <div className="user-avatar">
                                    <img src={require('../img/images.jfif')} alt="" />
                                </div>
                                <h3 className="user-name">Tung Tran</h3>
                                <h6 className="user-member-ship">Frontend</h6>
                                <p className="text-center">
                                    Neque cursus curae ante scelei que vehicula porttitor natoque risus vitae lacinia felis elit netu
          </p>
                            </div>
                        </div>
                        {/* het 1col */}
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="user-person-navigation">
                                <div className="user-avatar">
                                    <img src={require('../img/52591385_1600705410072875_5485075121376854016_n.jpg')} alt="" />
                                </div>
                                <h3 className="user-name">Pham Huong</h3>
                                <h6 className="user-member-ship">Backend</h6>
                                <p className="text-center">
                                    Neque cursus curae ante scelei que vehicula porttitor natoque risus vitae lacinia felis elit netu
          </p>
                            </div>
                        </div>
                        {/* het 1col */}
                    </div>
                </article>
                {/* end creative-team */}
                <div className="contact container">
                    <h1 className="text-center">Want to become Part of our Team?</h1>
                    <p className="text-center usslogan">We are looking just for you!</p>
                    <p className="text-center font">
                        <i className="fa fa-paper-plane" />
                    </p>
                    <p className="text-center">
                        <button  type="submit" id="update_avatar" className="btn btn-primary">Contact us</button>
                    </p>
                </div>
            </div>

        );
    }
}

export default Bodyaboutus;