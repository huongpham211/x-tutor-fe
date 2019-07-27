import React, { Component } from 'react';

class Bodyhome extends Component {
  constructor(props, context) {
    super(props, context);
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInUsername: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpUsername: '',
      signUpRole:''
    };
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignInUsername = this.onTextboxChangeSignInUsername.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpRole = this.onTextboxChangeSignUpRole.bind(this);
    // this.onLogin = this.onLogin.bind(this);
    // this.onSignUp = this.onSignUp.bind(this);
    // this.logout = this.logout.bind(this);
  }

  onTextboxChangeSignInUsername = (event) => {
    // console.log(event.target.value);
    this.setState({
      signInUsername:event.target.value
    });
  }

  onTextboxChangeSignInPassword(event) {
    // console.log(event.target.value);
    this.setState({
      signInPassword:event.target.value
    });
  }

  onTextboxChangeSignUpPassword(event){
    // console.log(event.target.value);
    this.setState({
      signUpPassword:event.target.value
    })
  }

  onTextboxChangeSignUpUsername(event){
    // console.log(event.target.value);
    this.setState({
      signUpUsername:event.target.value
    });
  }

  onTextboxChangeSignUpEmail(event){
    // console.log(event.target.value);
    this.setState({
      signUpEmail:event.target.value
    });
  }

  onTextboxChangeSignUpRole(event){
    // console.log(event.target.value);
    this.setState({
      signUpRole:event.target.value
    });
  }
  

  
  render() {
   
    return (
      <div>  <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form action="" className="login-form">
              <h1>Login</h1>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">x</span>
              </button>
              <div className="txtb">
                <input type="text" onChange={(event) =>this.onTextboxChangeSignInUsername(event)}/>
                <span data-placeholder="Username" />
              </div>
              <div className="txtb">
                <input type="password" onChange={(event) =>this.onTextboxChangeSignInPassword(event)}/>
                <span data-placeholder="Password" />
              </div>
              <input type="submit"  className="logbtn" value="Login" onClick={(signInPassword,signInUsername) => this.props.onLogin(this.state.signInPassword,this.state.signInUsername)}/>
              <div className="bottom-text">
                Don't have account? <a href="/signup">Sign up</a>
              </div>
            </form>

          </div>
        </div>
      </div>
        {/* end form login */}
        <div className="modal fade" id="modalSignupForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form action="" className="login-form1">
                <h1>Sign up</h1>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">x</span>
                </button>
                <div className="txtb">
                  <input type="text"  onChange={(event) => this.onTextboxChangeSignUpUsername(event)}/>
                  <span data-placeholder="Username" />
                </div>
                <div className="txtb">
                  <input type="text"  onChange={(event) => this.onTextboxChangeSignUpEmail(event)}/>
                  <span data-placeholder="Email" />
                </div>
                <div className="txtb">
                  <input type="text"  onChange={(event) => this.onTextboxChangeSignUpRole(event)}/>
                  <span data-placeholder="Role"/>
                </div>
                   <div className="txtb">
                  <input type="password" onChange={(event) => this.onTextboxChangeSignUpPassword(event)}/>
                  <span data-placeholder="Password"  />
                </div>
                <div className="condition">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <h5>I agree to the<span>Terms and Conditions</span></h5>
                </div>
                <input type="submit" className="logbtn" value="Sign up" onClick={(signUpUsername,signUpPassword,signUpEmail,signUpRole) => this.props.onSignUp(this.state.signUpUsername,this.state.signUpPassword,this.state.signUpEmail,this.state.signUpRole)}/>
                <div className="bottom-text">
                  Have already account ? <a href="/login">Login here</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*         end form register
       */}

        <div className="slogan text-center">
          <div className="container">
            <h3>You only have to know one thing</h3>
            <h1>You can learn anything</h1>
            <h4>For everyone</h4>
            <button name="" id="" className="btn btn-primary" href="" >Start Learning Now</button>
          </div>
        </div>
        <div className="choose-courses">
          <div className="container">
            <div className="title text-center">
              <h4>CHOOSE YOUR COURSE</h4>
              <h2>GET THE WORLD CLASS &amp; VERIFIED COURSE</h2>
              <div className="icon">
                <i className="far fa-money-bill-alt" />
                <span />
                <span />
              </div>
            </div>
            <div className="container">
              <div className="choose-course row">
                <div className="col-md-4 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-microphone" />
                    </div>
                  </div>
                  <h3>Language</h3>
                </div>
                <div className="col-md-4 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-compact-disc" />
                    </div>
                  </div>
                  <h3>Software</h3>
                </div>
                <div className="col-md-4 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-desktop" />
                    </div>
                  </div>
                  <h3>Web Develope</h3>
                </div>
                <div className="col-md-4 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-camera-retro" />
                    </div>
                  </div>
                  <h3>Photography</h3>
                </div>
                <div className="col-md-4 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-money-bill-alt" />
                    </div>
                  </div>
                  <h3>Business</h3>
                </div>
                <div className="col-md-4 col-xs-6 text-center">
                  <div className="courses">
                    <div className="course text-center">
                      <i className="fas fa-comments" />
                    </div>
                  </div>
                  <h3>Social Media</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="button"><i className="fas fa-sort-up" /></button>
        {/* end choose courses */}
        <div className="fact text-center">
          <div className="container">
            <div className="content">
              <h1>SOME IMPORTANT FACTS ABOUT US</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique ipsum id, modi incidunt el</p>
            </div>
            <div className="group-button">
              <button name="" id="" className="btn btn-warning" href="" role="button">Purchase Courses</button>
              <button name="" id="" className="btn btn-primary" href="" role="button">Start Learning Now</button>
            </div>
          </div>
        </div>
        {/* end fact */}
        <div className="top-courses">
          <div className="title text-center">
            <h4>CHOOSE YOUR COURSE</h4>
            <h2>THE TOP POPULAR COURSES FOR YOU</h2>
            <div className="icon">
              <i className="far fa-money-bill-alt" />
              <span />
              <span />
            </div>
          </div>
          <div className="container">
            <div className="top-course row">
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
              <div className="col-md-3 col-xs-6">
                <div className="your-courses">
                  <img src={require('../img/625204_436a_2.jpg')} alt="" />
                  <div className="outside">
                    <h2 className="title">Understanding Typescript</h2>
                    <h3 className="author">Andrew Maed</h3>
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
            </div>
          </div>
        </div>
        {/* end top-courses */}
        <div className="why">
          <div className="container">
            <div className="noname row">
              <div className="col-md-8 col-xs-12 left">
                <h1>WHY X-TUTOR?</h1>
                <p>There are many variations of passages of available, but the majority have suffered alteration
                  in some form,  by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                <button name="" id="" className="btn btn-primary" role="button">Start Learning Now</button>
              </div>
              <div className="col-md-4 right">
                <img src={require('../img/girl-1.png')} alt="" />

              </div>
            </div>
          </div>
        </div>
        <div className="the-best text-center">
          <div className="title text-center">
            <h4>CHOOSE YOUR COURSE</h4>
            <h2>THE TOP POPULAR COURSES FOR YOU</h2>
            <div className="icon">
              <i className="far fa-money-bill-alt" />
              <span />
              <span />
            </div>
          </div>
          <div className="container">
            <div className="learn-best row">
              <div className="col-md-3 col-xs-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="best">
                  <img src={require('../img/member6.jpg')} alt="" />

                  <h3>LANA SMITH</h3>
                  <h4>Vice Head Teacher</h4>
                  <p>Nam libelo tempore, cum soluta nobis est eligendi optio cumque nilhi impedil quo minus end maximie fade posimus the end.</p>
                </div>
              </div>



            </div>
          </div>
        </div>
        <div className="structor">
          <div className="container">
            <div className="become row">
              <div className="col-md-8 left">
                <h2>BECOME AN INSTRUCTOR</h2>
                <h3>Join thousand of instructors and earn money hassle free!</h3>
              </div>
              <div className="col-md-4 right">
                <button name="" id="" className="btn btn-primary" role="button">Start Learning Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Bodyhome;