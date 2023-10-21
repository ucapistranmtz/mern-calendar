


import React, { useEffect, useState } from 'react'
import enUS from 'date-fns/locale/en-US'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import { getMessagesES, localizer } from '../../helpers'
import { useUiStore, useCalendarStore, useAuthStore, } from '../../hooks'




export const CalendarPage = () => {
  const { user } = useAuthStore()
  const { openDateModal, onCloseDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {



    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadious: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  }


  const onDoubleClick = (event) => {
    //  console.log({ onDoubleClick: event })
    openDateModal();
  }

  const onSelect = (event) => {
    console.log({ onSelect: event })
    setActiveEvent(event);
  }

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event)
  }


  useEffect(() => {
    startLoadingEvents();
  }, [])

  return (
    <>

      <Navbar />
      <Calendar
        defaultView={lastView}
        //culture='en'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        // messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}

      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
