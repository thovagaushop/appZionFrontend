import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './auth/authenticationSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer
  }
})