import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import ExampleControlSlot from './ExampleControlSlot'
import moment from 'moment'
import * as BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/sass/styles.scss'
import axios from '../axios';

let allViews = Object.keys(Views).map(k => Views[k])

const propTypes = {}

class CalendarTutor extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = { events: [] }
  }

  // handleSelect = ({ start, end }) => {
  //   const title = window.prompt('New Event name')
  //   if (title)
  //     this.setState({
  //       events: [
  //         ...this.state.events,
  //         {
  //           start,
  //           end,
  //           title,
  //         },
  //       ],
  //     })
  // }



  componentDidMount() {
    var config = {
      headers: { "Authorization": "Bearer " + localStorage.getItem("signJwt") }
    }
    axios.get(`api/v1/users/${this.props.match.params.id}/tuition-schedules`, config)
    .then((res) => {
      
      const log = []
       res.data.allSchedules.map(schedule => {   
    
         axios.get(`api/v1/schedules/${schedule._id}/sessions`, config)
          .then(res => {
            console.log(res);
            
            const events =res.data.sessions.map(item => ({
              start: new Date(item.startDate),
              end: new Date(item.endDate),
              title: item.scheduleId.courseCode
            }));
            events.map(item =>{    
              log.push(item)        
            })
        })
      }) 
      this.setState({ events: log });
      console.log(this.state.events);        
    })
    .catch(err => console.log(err))
}

    handleClick(){
      alert('deo hieu')
    }

  // componentWillMount() {
  //   this.setState({
  //     events: this.state.test.map((item,index)=>({...item,index}))
  //   });
  // }




  render() {
    // this.state.events =  this.state.test.map((item,index)=>({...item,index}))



    const localizer = BigCalendar.momentLocalizer(moment)
    return (
      <>
        <ExampleControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
          </strong>
        </ExampleControlSlot.Entry>
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultView={Views.WEEK}
          // scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={this.handleClick}
          onSelectSlot={this.handleSelect}
        />
      </>
    )
  }
}

CalendarTutor.propTypes = propTypes

export default CalendarTutor