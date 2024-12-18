import {baseAPI} from "../baseAPI";

export const forumAPI = {
    async getForums() {
        const {data, status} = await baseAPI.get('/forum');
        if (status !== 200) {
            return {
                success: false, ...data
            }
        }

        return {success: true, forums: data};
    },

    async getForum(id) {
        try {
            const {data} = await baseAPI.get('/forum/' + id);
            return {
                success: true, forum: data
            }
        } catch (e) {
            return {success: false, message: e.response.data.message};
        }
    },

    async createForum({title, description}) {
        try {
            const {data} = await baseAPI.post('/forum', {title, description});

            return {success: true, forum: {...data, messages: []}};
        } catch (e) {
            return {
                success: false, message: e.response.data.message
            }
        }
    },

    async updateForum(id, {title, description}) {
        try {
            const {data} = await baseAPI.put(`/forum/${id}`, {title, description});
            return data;
        } catch (e) {
            return {
                success: false, message: e.response.data.message
            }
        }
    },

    async deleteForum(id) {
        try {
            const {data} = await baseAPI.delete(`/forum/${id}`);
            return data;
        } catch (e) {
            return {
                success: false, message: e.response.data.message
            }
        }
    },

    async sendMessage({_id, message}) {
        try {
            const {data} = await baseAPI.post(`/forum/${_id}/message`, {message});
            return {message: data, success: true};
        } catch (e) {
            return {
                success: false, message: e.response.data.message
            }
        }
    },

    async deleteMessage(id) {
        try {
            const {data} = await baseAPI.delete(`/forum/message/${id}`);
            return data;
        } catch (e) {
            return {
                success: false, message: e.response.data.message
            }
        }
    },

    async updateMessage(id, message) {
        try {
            const {data} = await baseAPI.put(`/forum/message/${id}`, {message});
            return data;
        } catch (e) {
            return {
                success: false, message: e.response.data.message
            }
        }
    }
}