import React, { Component } from 'react';
import axios from '../axios';
import Pdf from "react-to-pdf";


class Bill extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            idcourse:this.props.match.params.id,
        }
    }

    componentWillMount(){
        var config = {
            headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
        }
        axios
        .get(`api/v1/schedules/${this.props.match.params.id}`,config)
        .then((response) =>{
            console.log(response.data);
            this.setState({
                coursecode:response.data.tuiSchedule.courseCode,
                feePerHour:response.data.tuiSchedule.feePerHour,
                hour:response.data.tuiSchedule.lessionsPerCourse*response.data.tuiSchedule.hoursPerLession,
                feeTotal:response.data.tuiSchedule.feeTotal,
                id:response.data.tuiSchedule._id,
                senderId:response.data.tuiSchedule.senderId,
            });
            return  axios
            .get(`api/v1/users/${this.state.senderId}`)
            .then((response) =>{
                console.log(response);
                
                this.setState({
                    name:response.data.userFound.firstName,
                });
            })
        })
      
       
    }
    
    render() {
        const ref = React.createRef();

        var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
  const currDate = date;
        return (
            <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
                   <div className="bill" ref={ref}>
                <div className="top">
                    <div className="trai">
                        <svg width={190} height={39} viewBox="0 0 190 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59375 15.3438C11.5234 15.7344 15.0391 16.8737 19.1406 18.7617C23.2422 20.5846 27.2135 23.2865 31.0547 26.8672C34.9609 30.3828 37.3698 34.0938 38.2812 38H0C3.25521 37.7396 6.11979 36.3724 8.59375 33.8984C11.1328 31.3594 12.5 28.4622 12.6953 25.207C12.8906 21.8867 11.5234 18.599 8.59375 15.3438ZM11.7188 0.5C14.388 0.890625 17.5456 2.09505 21.1914 4.11328C24.8372 6.13151 28.5156 8.70312 32.2266 11.8281C36.0026 14.9531 39.4206 18.8594 42.4805 23.5469C45.5404 28.2344 47.526 33.0521 48.4375 38H39.0625C38.4766 35.0703 37.3047 32.2383 35.5469 29.5039C33.8542 26.7695 31.8685 24.3932 29.5898 22.375C27.3763 20.2917 25.1302 18.5339 22.8516 17.1016C20.638 15.6042 18.4245 14.4323 16.2109 13.5859C16.3411 8.3125 14.8438 3.95052 11.7188 0.5ZM107.829 18.56H100.239V38H98.1391V18.56H90.5491V16.7H107.829V18.56ZM119.66 36.26C121 36.26 122.11 36.01 122.99 35.51C123.89 34.99 124.6 34.32 125.12 33.5C125.66 32.66 126.03 31.71 126.23 30.65C126.45 29.59 126.56 28.52 126.56 27.44V16.7H128.66V27.44C128.66 28.88 128.5 30.25 128.18 31.55C127.86 32.83 127.34 33.96 126.62 34.94C125.92 35.92 125 36.7 123.86 37.28C122.72 37.86 121.33 38.15 119.69 38.15C118.01 38.15 116.59 37.85 115.43 37.25C114.29 36.63 113.37 35.82 112.67 34.82C111.97 33.82 111.47 32.68 111.17 31.4C110.87 30.12 110.72 28.8 110.72 27.44V16.7H112.79V27.44C112.79 28.56 112.9 29.65 113.12 30.71C113.34 31.77 113.71 32.71 114.23 33.53C114.77 34.35 115.48 35.01 116.36 35.51C117.24 36.01 118.34 36.26 119.66 36.26ZM148.786 18.56H141.196V38H139.096V18.56H131.506V16.7H148.786V18.56ZM159.561 38.15C158.081 38.15 156.721 37.85 155.481 37.25C154.261 36.63 153.211 35.82 152.331 34.82C151.451 33.8 150.771 32.64 150.291 31.34C149.811 30.04 149.571 28.71 149.571 27.35C149.571 25.93 149.821 24.57 150.321 23.27C150.841 21.97 151.551 20.82 152.451 19.82C153.351 18.82 154.411 18.03 155.631 17.45C156.851 16.85 158.171 16.55 159.591 16.55C161.071 16.55 162.421 16.87 163.641 17.51C164.881 18.13 165.931 18.95 166.791 19.97C167.671 20.99 168.351 22.15 168.831 23.45C169.311 24.73 169.551 26.04 169.551 27.38C169.551 28.8 169.291 30.16 168.771 31.46C168.271 32.76 167.571 33.91 166.671 34.91C165.791 35.89 164.741 36.68 163.521 37.28C162.301 37.86 160.981 38.15 159.561 38.15ZM151.671 27.35C151.671 28.51 151.861 29.63 152.241 30.71C152.621 31.77 153.161 32.72 153.861 33.56C154.561 34.38 155.391 35.04 156.351 35.54C157.311 36.02 158.381 36.26 159.561 36.26C160.761 36.26 161.851 36 162.831 35.48C163.811 34.96 164.641 34.28 165.321 33.44C166.001 32.6 166.521 31.65 166.881 30.59C167.261 29.53 167.451 28.45 167.451 27.35C167.451 26.19 167.251 25.08 166.851 24.02C166.471 22.94 165.931 21.99 165.231 21.17C164.531 20.35 163.701 19.7 162.741 19.22C161.781 18.72 160.721 18.47 159.561 18.47C158.361 18.47 157.271 18.73 156.291 19.25C155.311 19.75 154.481 20.42 153.801 21.26C153.121 22.1 152.591 23.05 152.211 24.11C151.851 25.17 151.671 26.25 151.671 27.35ZM173.51 38V16.7H182.51C183.43 16.7 184.27 16.9 185.03 17.3C185.81 17.68 186.48 18.19 187.04 18.83C187.6 19.45 188.03 20.16 188.33 20.96C188.65 21.76 188.81 22.57 188.81 23.39C188.81 24.17 188.69 24.92 188.45 25.64C188.23 26.34 187.91 26.98 187.49 27.56C187.09 28.12 186.6 28.6 186.02 29C185.44 29.38 184.79 29.64 184.07 29.78L189.29 38H186.92L181.91 30.14H175.61V38H173.51ZM175.61 28.28H182.57C183.19 28.28 183.75 28.15 184.25 27.89C184.77 27.61 185.21 27.24 185.57 26.78C185.93 26.32 186.21 25.8 186.41 25.22C186.61 24.64 186.71 24.03 186.71 23.39C186.71 22.75 186.59 22.14 186.35 21.56C186.13 20.96 185.82 20.44 185.42 20C185.04 19.56 184.58 19.21 184.04 18.95C183.52 18.69 182.97 18.56 182.39 18.56H175.61V28.28Z" fill="#86BC42" />
                            <path d="M65.9575 16.7L72.9475 26L79.9375 16.7H82.2475L74.0575 27.5L82.0075 38H79.6975L72.9475 29L66.1975 38H63.8275L71.7775 27.5L63.5875 16.7H65.9575Z" fill="#242C42" />
                        </svg>
                        <h4 id="address">22, Thanh Cong</h4>
                    </div>
                    <div className="phai">
                        <h3>Bill Payment Schedule</h3>
                    </div>
                </div>
                <div id="someinfo">
                    <h4 className="idcourse">{this.state.id}</h4>
                    <h4 className="datepay">{currDate}</h4>
                </div>
                <div className="infouserpay">
                    <h3>Bill to :</h3>
                    <div id="infouser">
                        <h4 className="nameoncard">{this.state.name}</h4>
                        <h4 className="address">91 NCT</h4>
                    </div>
                </div>
                <div className="infocourse">
                    <div className="trai">
                        <h4>Schedule</h4>
                        <h4>Fee per hour</h4>
                        <h4>Hour</h4>
                    </div>
                    <div className="phai">
                        <h4>{this.state.coursecode}</h4>
                        <h4>{this.state.feePerHour}</h4>
                        <h4>{this.state.hour}</h4>
                        <h4 className="totaltien">Total<span> {this.state.feeTotal}</span></h4>
                    </div>
                </div>
                <div className="paymentbill">
                    <h3>Payment Method</h3>
                    <div className="paymentbillcard">
                        <h4>Visa card</h4>
                        <h4>Master Card</h4>
                    </div>
                </div>
             
            </div>
            </div>
         
        );
    }
}

export default Bill;