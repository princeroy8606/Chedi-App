import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../../api/server-api';

export const userSignUp = createAsyncThunk('auth/signup', async (userdata: Object) => {
    try {
        const { data } = await api.signUp(userdata);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const userLogin = createAsyncThunk('auth/login', async (userdata: Object) => {
    try {
        const { data } = await api.login(userdata)
        console.log(data);
        return data;
    } catch (err) {
        console.log(err)
    }
})
