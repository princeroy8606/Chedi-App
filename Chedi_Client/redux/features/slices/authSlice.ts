import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userSignUp } from '../actions/authentication';

const initialState = {
  userData: null,
  mailVerification: null,
  otpVerification: null,
  passwordUpdate: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export default authSlice.reducer;
