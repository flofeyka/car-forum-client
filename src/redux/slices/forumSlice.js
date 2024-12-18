import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {forumAPI} from "../../api/routes/forumAPI";
import {setLoading} from "./authSlice";

const forumSlice = createSlice({
    name: 'forum', initialState: {
        forumList: [], messages: [], error: null, loading: false, selectedForum: null
    }, reducers: {
        setForums: (state, action) => {
            state.forumList = action.payload;
        }, setMessages: (state, action) => {
            state.messages = action.payload;
        }, setError: (state, action) => {
            state.error = action.payload;
        }, setLoading: (state, action) => {
            state.loading = action.payload;
        }, setSelectedForum: (state, action) => {
            state.selectedForum = action.payload;
        },
        sendMessageInForum: (state, action) => {
            state.selectedForum.messages.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(editMessage.fulfilled, (state, action) => {
            state.selectedForum.messages.forEach(message => {
                if(message._id === action.payload._id) {
                    message.message = action.payload.message;
                }

                return message;
            });
            state.loading = false;
        })
        builder.addCase(editMessage.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            state.selectedForum.messages.push(action.payload);
            state.loading = false;
        })
        builder.addCase(sendMessage.pending, (state, action) => {
            state.loading = true;
        })
    }
});

export const {setForums, sendMessageInForum, setSelectedForum, setError} = forumSlice.actions;

export const getForums = createAsyncThunk('/forum/all', async (_, {dispatch}) => {
    dispatch(setLoading(true));
    const data = await forumAPI.getForums();
    dispatch(setLoading(false));
    if (!data.success) {
        return dispatch(setError(data.message))
    }
    dispatch(setForums(data.forums));
})

export const getForum = createAsyncThunk('/forum/get', async (payload, {dispatch}) => {
    dispatch(setLoading(true));
    const data = await forumAPI.getForum(payload._id);
    dispatch(setLoading(false));
    if (!data.success) {
        return dispatch(setError(data.message))
    }

    dispatch(setSelectedForum(data.forum));
})

export const createForum = createAsyncThunk('/forum/create', async (payload, {dispatch}) => {
    dispatch(setLoading(true));
    const data = await forumAPI.createForum(payload);
    dispatch(setLoading(false));
    if (!data.success) {
        return dispatch(setError(data.message));
    }

    dispatch(setSelectedForum(data.forum));
});

export const updateForum = createAsyncThunk('/forum/update', async (payload, {dispatch, getState}) => {
    dispatch(setLoading(true));
    const data = await forumAPI.updateForum(payload._id, {title: payload.title, description: payload.description});
    dispatch(setLoading(false));
    if (!data.success) {
        return dispatch(setError(data.message))
    }

    dispatch(setSelectedForum({...getState().forum.selectedState, ...payload}));
});

export const deleteForum = createAsyncThunk('/forum/delete', async (payload, {dispatch, getState}) => {
    dispatch(setLoading(true));
    const data = await forumAPI.deleteForum(payload._id);
    dispatch(setLoading(false))
    if(!data.success) {
        return dispatch(setError(data.message))
    }

    dispatch(setForums(getState().forum.forumList.filter(item => item._id !== payload._id)));
})

export const sendMessage = createAsyncThunk('/forum/sendMessage', async (payload, {dispatch, getState}) => {
    const data = await forumAPI.sendMessage(payload);
    console.log(data);
    return data.message;
});

export const editMessage = createAsyncThunk('/forum/editMessage', async (payload, {dispatch}) => {
    await forumAPI.updateMessage(payload._id, payload.message);
    return payload;
})

export default forumSlice.reducer;