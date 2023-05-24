import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer
    // Add other reducers here if needed
  }
});

export default store;