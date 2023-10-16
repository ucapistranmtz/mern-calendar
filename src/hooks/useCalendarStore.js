import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";




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
            dispatch(onUpdateEvent({ ...calendarEvent }))
        } else {
            // new 

            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
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
