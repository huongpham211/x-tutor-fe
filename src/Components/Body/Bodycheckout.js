import React, { Component } from 'react';

class Bodycheckout extends Component {
  render() {
    return (
      <div  id="checkout">
        <div className="container">
          <div className="background_checkout row">
            <div className="col-md-4 checkout_left">
              <div className="subtitle">
                <h4>Your course</h4>
              </div>
              <div id="info_courses">
                <h4>Practical Transformation Using XSLT and XPath</h4>
                <h5>By G. Ken Holman</h5>
                <h3>$45.00</h3>
              </div>
            </div>
            {/* end checkout_left */}
            <div className="col-md-8 checkout_right">
              <div className=" subtitle1">
                <h4>Checkout</h4>
              </div>
              <form className="checkout_method">
                <div className="credit_card">
                  <div className="form-check check_out">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      Credit Card
                        </label>
                    <div id="visa_card">
                      <img src={require('../img/card-visa.svg')} alt="" />
                    </div>
                    <div id="master_card">
                      <img src={require('../img/card-mc.svg')} alt="" />
                    </div>
                  </div>
                  <div className="col-md-9 credit_info">
                    <div className="form-group">
                      <label htmlFor="">Card number</label>
                      <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div className="form-group" id="together">
                      <div id="expired_date" className="col-md-8">
                        <label htmlFor="">Expired Date</label>
                        <div id="trong_expired">
                          <input type="text" className="col-md-6 form-control" name="" id="thang" aria-describedby="helpId" placeholder="" />
                          <input type="text" className="col-md-6 form-control" name="" id="nam" aria-describedby="helpId" placeholder="" />
                        </div>
                      </div>
                      <div id="cvv_info" className="col-md-4">
                        <label htmlFor="">Cvv</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                      </div>
                    </div>
                    {/* end together */}
                    <div className="form-group">
                      <label htmlFor="">Name On Card</label>
                      <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Remarks</label>
                      <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                    </div>
                    {/* end remark */}
                    <div id="condition">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <h5>Remember this card</h5>
                    </div>
                    <input type="submit" className="checkout_button" value="Complete payment" />
                  </div>
                </div>
                {/* end credit_card */}
                <div id="paypal">
                  <div className="form-check check_out">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                    <img src={require('../img/pp_cc_mark_111x69.jpg')} alt="" />
                  </div>
                  <div className="credit_info1">
                    <h5>In order to complete your transaction, we will transfer you over to PayPal's secure
                          servers.</h5>
                    <input type="submit" className="checkout_button" value="Proceed" />
                  </div>
                </div>
                {/* end paypal */}
              </form>
            </div>
            {/* end checkout_right */}
          </div>
        </div>
      </div>

    );
  }
}

export default Bodycheckout;
