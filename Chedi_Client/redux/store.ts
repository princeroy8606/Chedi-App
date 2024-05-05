
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/slices/authSlice';
import plantReducer from './features/slices/plantsSlice';

export const store = configureStore({
  reducer: {
    authReducer,
    plantReducer
  },
});
