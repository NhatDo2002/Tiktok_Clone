import * as httpRequests from '~/utils/httpRequests';

export const login = async (user) => {
    try {
        const res = await httpRequests.post(`auth/login`, {
            email: user.email,
            password: user.password,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
