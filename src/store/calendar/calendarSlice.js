import { createSlice } from '@reduxjs/toolkit';
//import { addHours } from 'date-fns';
import { getMessagesES, localizer, } from '../../helpers'

/* const tempEvent = {
  _id: new Date().getTime,
  title: 'birthday',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafa',
  user: {
    _id: '1231',
    name: 'Ulises'
  }
}
 */



export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [
      //  tempEvent
    ],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload)
      state.activeEvent = null
    },
    onUpdateEvent: (state, { payload }) => {

      state.events = state.events.map(item => {
        if (item.id === payload.id) {
          return payload
        }
        return item
      })

    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(event => event.id !== state.activeEvent.id);
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      // state.events = payload;
      payload.forEach(event => {
        const exist = state.events.some(dbEvent => dbEvent.id === event.id)
        if (!exist) {
          state.events.push(event)
        }

      })
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents=true;
      state.events = [];
      state.activeEvent=null;
    }
  }
});


// Action creators are generated for each case reducer function
export const {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} = calendarSlice.actions;