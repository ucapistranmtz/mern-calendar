


import React from 'react'
import enUS from 'date-fns/locale/en-US'
import { Navbar } from '../'
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

  const eventStyleGetter = (event, stsart, end, isSelected) => {

    console.log({ event, stsart, end, isSelected });

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
  return (
    <>

      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}

      />
    </>
  )
}
