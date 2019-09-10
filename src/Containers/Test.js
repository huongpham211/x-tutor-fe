// import React, { Component } from 'react';
// import * as BigCalendar from 'react-big-calendar';
// import { Calendar, Views } from 'react-big-calendar';
// import 'react-big-calendar/lib/sass/styles.scss'
// import ExampleControlSlot from './ExampleControlSlot'
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios'
// moment.locale('en-GB');
// BigCalendar.momentLocalizer(moment);
// class Test extends Component {
//  constructor(props, context) {
//    super(props, context);
//    this.state = {
//     cal_events: [],
//   }
//  }
 
//  componentDidMount() {
//   var config = {
//     headers:{"Authorization": "Bearer " + localStorage.getItem("signJwt")}
//   }
//   axios.get(`api/v1/users/${this.props.match.params.id}/tuition-schedules`,config)
//   .then((res) =>{
//     this.setState({cal_events:res.data.allSchedules});
//   })
//   .catch(err => console.log(err))
// }
// render() {
//   const {cal_events} = this.state
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Test Calendar</h1>
//         </header>
//         <div style={{ height: 700 }}>
//           <Calendar
//             events={cal_events}
//             step={30}
//             defaultView='week'
//             views={['month','week','day']}
//             defaultDate={new Date()}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default Test;