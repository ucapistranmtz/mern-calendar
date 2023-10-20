import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import { calendarApi } from "../api";




export const useCalendarStore = () => {

    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth)


    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))

    }

    const startSavingEvent = async (calendarEvent) => {

        //TODO: backend call 

        //!all ok 
        if (calendarEvent._id) {
            //updating
            dispatch(onUpdateEvent({ ...calendarEvent }))
        } else {
            // new 
            const { data } = await calendarApi.post('/events', calendarEvent);
            console.log('new event', data)
            dispatch(onAddNewEvent({ ...calendarEvent, _id: data.event.id, user  }))
        }

    }


    const startDeletingEcent = () => {


        //todo  backend call
        dispatch(onDeleteEvent())
    }


    return {
        //*properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //*Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEcent
    }
}
