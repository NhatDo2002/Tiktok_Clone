import * as httpRequests from '~/utils/httpRequests';

export const getListVideo = async (type = 'for-you', page = '1') => {
    try {
        const res = await httpRequests.get(`videos`, {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
