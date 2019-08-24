import React, { Component } from 'react';
import axios from '../../axios';
class Bodycheckout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: '',
      cardNumber:'',
      nameOnCard:'',
      expiredDate: '',
      remarks: '',
      residentialAddress: '',
      city: '',
      country: '',
      postalCode: '',
      idcourse:this.props.id
    }
  }

  changeNameOnCard(e){
    this.setState({
      nameOnCard:e.target.value
    });
    console.log(this.state.nameOnCard);
    
    
  }
  changeCardNumber(e){
    this.setState({
      cardNumber:Number(e.target.value)
    });
    
  }
  changeExpiredDate(e){
    this.setState({
      expiredDate:e.target.value
    });
    
  }
  changeRemarks(e){
    this.setState({
      remarks:e.target.value
    });
    
  }
  changeResidentialAddress(e){
    this.setState({
      residentialAddress:e.target.value
    });
    
  }
  changeCity(e){
    this.setState({
      city:e.target.value
    });
    
  }
  changeProvince(e){
    this.setState({
      province:e.target.value
    });
    
  }
  changeCountry(e){
    this.setState({
      country:e.target.value
    });
    
  }
  changePostalCode(e){
    this.setState({
      postalCode:e.target.value
    });
    
  }


  componentWillMount() {
    var config = {
      headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
    }
    axios
      .get(`api/v1/cards`, config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err))
  }

  testsmt = (id,key) => {
    var config = {
      headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
    }
    axios
      .get(`api/v1/cards/${id}`, config)
      .then((res) => {
        console.log(res.data); 
        this.setState({
          cardNumber:res.data[key].cardNumber,
          nameOnCard:res.data[key].nameOnCard,
          expiredDate:res.data[key].expiredDate,
          remarks:res.data[key].remarks,
          residentialAddress:res.data[key].residentialAddress,
          city:res.data[key].city,
          country:res.data[key].country,
          postalCode:res.data[key].postalCode,
          
        })       
      })
      .catch(err => console.log(err))
      

  }

  rendercard = () => {
    if (this.state.data.length > 0) {
      return this.state.data.map((value, index) =>
        <div className="col-md-4 onecreditcard" key={index} onClick={(id,key) => this.testsmt(value._id,index)}>
          <h4>{value.cardType}</h4>
          <h5>{value.cardNumber}</h5>
        </div>
      )
    }
  }

  showcard = () => {
    if (this.state.data !== null) {
      return (
        <div className="allcard">
          <h4>Choose one card</h4>
          <div className="outsidecard">
            {this.rendercard()}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="checkout">
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
              <div className="checkout_method">
                <form className="credit_card">
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
                  {this.showcard()}
                    <div className="form-group">
                      <label htmlFor="">Card number</label>
                      <input type="text" className="form-control" name="" id="" aria-describedby="helpId" value={this.state.cardNumber} onChange={(e) => this.changeCardNumber(e)}/>
                    </div>
                    <div className="form-group" id="together">
                      <div id="expired_date" className="col-md-8">
                        <label htmlFor="">Expired Date</label>
                        <div id="trong_expired">
                          <input type="text" className="form-control" name="" id="thang" aria-describedby="helpId" value={this.state.expiredDate} onChange={(e) => this.changeExpiredDate(e)}/>                        </div>
                      </div>
                      <div id="cvv_info" className="col-md-4">
                        <label htmlFor="">Cvv</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId"  />
                      </div>
                    </div>
                    {/* end together */}
                    <div className="form-group">
                      <label htmlFor="">Name On Card</label>
                      <input type="text" className="form-control" name="" id="" aria-describedby="helpId" value={this.state.nameOnCard} onChange={(e) => this.changeNameOnCard(e)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Remarks</label>
                      <input type="text" className="form-control" name="" id="" aria-describedby="helpId" value={this.state.remarks} onChange={(e) => this.changeRemarks(e)}/>
                    </div>
                    <div id="billinginfo">
                      <h4>Billing info</h4>
                      <div className="form-group">
                        <label htmlFor="">Residential Address</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" value={this.state.residentialAddress} onChange={(e) => this.changeResidentialAddress(e)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">City Address</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" value={this.state.city} onChange={(e) => this.changeCity(e)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Country</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" value={this.state.country} onChange={(e) => this.changeCountry(e)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Postal Code</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" value={this.state.postalCode} onChange={(e) => this.changePostalCode(e)}/>
                      </div>

                    </div>
                    {/* end remark */}
                    <div id="condition">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <h5>Remember this card</h5>
                    </div>
                    <a type="submit" href={`/bill/${this.props.idcourse}`} className="checkout_button" >Complete payment</a>
                  </div>
                </form>
                {/* end credit_card */}
                <div id="paypal">
                  <div className="form-check check_out">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                    <img src={require('../img/pp_cc_mark_111x69.jpg')} alt="" />
                  </div>
                  <div className="credit_info1">
                    <h5>In order to complete your transaction, we will transfer you over to PayPal's secure
                          servers.</h5>
                    <a href="https://www.paypal.com/us/signin" type="submit" className="checkout_button" value="" >Proceed</a>
                  </div>
                </div>
                {/* end paypal */}
              </div>
            </div>
            {/* end checkout_right */}
          </div>
        </div>
      </div>

    );
  }
}

export default Bodycheckout;
