import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store/calendar/calendarSlice";




export const useCalendarStore = () => {

    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar);


    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))

    }

    const startSavingEvent = async (calendarEvent) => {

        //TODO: backend call 

        //!all ok 
        if (calendarEvent._id) {
            //updating
        } else {
            // new 

            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }

    }

    return {
        //*properties
        events,
        activeEvent,
        //*Methods
        setActiveEvent,
        startSavingEvent

    }
}
