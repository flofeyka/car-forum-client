import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postAPI} from "../../api/routes/postAPI";

const postSlice = createSlice({
    name: 'news', initialState: {
        posts: [],
        loading: false

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload.posts;
        });
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.posts.push(action.payload.post);
            state.loading = false;
        })
        builder.addCase(addPost.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(editPost.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(editPost.fulfilled, (state, action) => {
            state.posts.forEach(post => {
                if (post._id === action.payload._id) {
                    post.title = action.payload.title;
                    post.content = action.payload.content;
                }

                return post;
            });
            state.loading = false;
        })
    }
});

export default postSlice.reducer;

export const fetchPosts = createAsyncThunk('/posts/fetch', async () => {
    return await postAPI.getPosts();
});

export const addPost = createAsyncThunk('/posts/add', async (payload) => {
    return await postAPI.addPost(payload);
})

export const editPost = createAsyncThunk('/posts/edit', async (payload) => {
    await postAPI.editPost(payload);
    return payload;
})