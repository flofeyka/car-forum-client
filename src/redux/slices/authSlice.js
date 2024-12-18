import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../../api/routes/authAPI";

const authSlice = createSlice({
    name: 'authSlice', initialState: {
        userData: null, error: null, loading: false
    }, reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        }, setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const {setError, setUserData, setLoading} = authSlice.actions;

export const signIn = createAsyncThunk('/Auth/sign-in', async (payload, {dispatch}) => {
    dispatch(setLoading(true));
    const data = await authAPI.signIn(payload);
    dispatch(setLoading(false));
    if (!data.success) {
        return dispatch(setError(data.message));
    }

    return dispatch(setUserData(data.user));
})

export const signUp = createAsyncThunk('/Auth/sign-up', async (payload, {dispatch}) => {
    dispatch(setLoading(true));
    const data = await authAPI.signUp(payload);
    dispatch(setLoading(false));
    if (!data.success) {
        return dispatch(setError(data));
    }

    return dispatch(setUserData(data.user));
});

export const logout = createAsyncThunk('/Auth/logout', async (payload, {dispatch}) => {
    await authAPI.logout();
    dispatch(setError(null));
    dispatch(setUserData(null));
});

export const getUserData = createAsyncThunk('/Auth/get-user-data', async (payload, {dispatch}) => {
    const data = await authAPI.getUserData(payload);
    if (!data.success) {
        return dispatch(setError(data.message));
    }

    return dispatch(setUserData(data.user));
})

export default authSlice.reducer;