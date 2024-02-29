import * as httpRequests from '~/utils/httpRequests';

export const search = async (q, type = "less") => {
    try {
        const res = await httpRequests.get(`users/search`, {
            params: {
                q,
                type
            }
        })
        return res.data
    }
    catch (error){
        console.log(error)
    }

}