import {baseAPI} from "../baseAPI";

export const authAPI = {
    async signIn({email, password}) {
        try {
            const {data} = await baseAPI.post('/auth/sign-in', {email, password});
            localStorage.setItem('accessToken', data.accessToken);

            return {success: true, user: data.user};
        } catch(e) {
            return {
                success: false,
                message: e.response.data.message
            }
        }

    },

    async signUp({phone, fullName, email, password}) {
        const {status, data} = await baseAPI.post('/auth/sign-up', {phone, fullName, email, password});
        if (status !== 200) {
            return {
                success: false, message: data.message
            }
        }

        localStorage.setItem('accessToken', data.accessToken);

        return {success: true, user: data.user};
    },

    async logout() {
        const {status, data} = await baseAPI.post('/auth/logout');
        if (status !== 200) {
            return {
                success: false, message: data.message
            }
        }
        localStorage.removeItem('accessToken')
        return data;
    },

    async getUserData() {
        const {data, status} = await baseAPI.get('/auth/get-user-data');
        localStorage.setItem('accessToken', data.accessToken);
        if (status !== 200) {
            return data;
        }

        return {user: data.user, success: true};
    }
}