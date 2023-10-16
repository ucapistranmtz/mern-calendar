import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';
import { getMessagesES, localizer, } from '../../helpers'

const tempEvent = {
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




export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {

      state.activeEvent = payload
    }
  }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;