import { configureStore } from '@reduxjs/toolkit';

import doctorReducer from './doctor';
import appointmentReducer from './appointment';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    appointments: appointmentReducer,
    users: userReducer,
  },
});
