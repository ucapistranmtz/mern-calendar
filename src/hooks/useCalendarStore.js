import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from "../store/calendar/calendarSlice";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";




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
        if (calendarEvent.id) {

            try {
                //updating
                const { data } = calendarApi.put(`events/${calendarEvent.id}`, calendarEvent);
             //   console.log('updating event',data)
                dispatch(onUpdateEvent({ ...calendarEvent, user }))
            } catch (error) {
                console.error(error);
                Swal.fire('Error while updating the event', error.response.data.msg, 'error')
            }

        } else {
            // new 
            const { data } = await calendarApi.post('/events', calendarEvent);
          //  console.log('new event', data)
            dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }))
        }

    }


    const startDeletingEvent = async() => {
        // Todo: Llegar al backend
        try {
            await calendarApi.delete(`/events/${ activeEvent.id }` );
            dispatch( onDeleteEvent() );
        } catch (error) {
            console.log(error);
            Swal.fire('Deleting event error', error.response.data.msg, 'error');
        }

    }

    const startLoadingEvents = async () => {

        try {

            const { data } = await calendarApi.get('/events');  
            const events = convertEventsToDateEvents(data.events);
      
            dispatch(onLoadEvents(events))
        } catch (error) {
            console.error('loading events error', error)
        }
    }



    return {
        //*properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //*Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}
