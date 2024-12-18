import {baseAPI} from "../baseAPI";

export const postAPI = {
    async getPosts() {
        try {
            const {data} = await baseAPI.get('/post');
            return {success: true, posts: data};
        } catch(e) {
            return {
                success: false,
                message: e.response.data.message
            }
        }
    },
    async addPost({title, content}) {
        try {
            const {data} = await baseAPI.post('/post', {title, content});
            return {success: true, post: data};
        } catch(e) {
            return {
                success: false,
                message: e.response.data.message
            }
        }
    },
    async editPost({_id, title, content}) {
        try {
            const {data} = await baseAPI.put(`/post/${_id}`, {title, content});
            return data;
        } catch(e) {
            return {
                success: false,
                message: e.response.data.message
            }
        }
    },
}