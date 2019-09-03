import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from './events'
import ExampleControlSlot from './ExampleControlSlot'
import moment from 'moment'
import * as BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/sass/styles.scss'
import axios from '../axios';

let allViews = Object.keys(Views).map(k => Views[k]) 

const propTypes = {}

class Selectable extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      events: [],
    }
  }

  
  componentDidMount() {
    var config = {
      headers:{"Authorization": "Bearer " + localStorage.getItem("signJwt")}
    }
    axios.get(`api/v1/users/${this.props.match.params.id}/tuition-schedules`,config)
    .then((res) =>{
      console.log(res.data);
      
      const events = []
      res.data.allSchedules.map((event) =>{
        events.push({
          start: moment(event.periodeStart).toDate(),
          end: moment(event.periodeEnd).toDate(), 
          title: event.courseCode,
        })
        console.log(events);
        
      })
      this.setState({events:events});
    })
    .catch(err => console.log(err))
  }
  

 

  render() {
    const {events} = this.state
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
          events={events}
          views={allViews}
          defaultView={Views.WEEK}
          // scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}          
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        />
      </>
    )
  }
}

Selectable.propTypes = propTypes

export default Selectable