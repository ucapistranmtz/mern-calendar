


import React, { useState } from 'react'
import enUS from 'date-fns/locale/en-US'
import { Navbar,CalendarEvent,CalendarModal } from '../'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessagesES, localizer } from '../../helpers'


const locales = {
  'en-US': enUS,
}



const events = [{

  title: 'birthday',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafa',
  user: {
    _id: '1231',
    name: 'Ulises'
  }
}]
export const CalendarPage = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView')|| 'week')

  const eventStyleGetter = (event, stsart, end, isSelected) => { 
    const style = {
      backgroundColir: '#347CF7',
      borderRadious:'0px',
      opacity:0.8,
      color:'white'
    }
    return {
      style
    }  
  }


  const onDoubleClick = (event)=> {
    console.log({doubleclick: event})
  }

  const onSelect = (event)=> {
    console.log({onSelect: event})
  }

  const onViewChange = (event)=> {
    localStorage.setItem('lastView',event);
    setLastView(event)
  }
  return (
    <>

      <Navbar />
      <Calendar
       defaultView= {lastView}      
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={ {
          event:CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={ onSelect}
        onView={onViewChange}

      />
      <CalendarModal/>
    </>
  )
}
