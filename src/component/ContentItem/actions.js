import { LIKE_VIDEO, UNLIKE_VIDEO, FAVORITE_VIDEO, UNFAVORITE_VIDEO} from "./constants"

export const likeVideo = payload => {
    return {
        type: LIKE_VIDEO,
        payload
    }
}

export const unlikeVideo = payload => {
    return {
        type: UNLIKE_VIDEO,
        payload
    }
}

export const favoriteVideo = payload => {
    return {
        type: FAVORITE_VIDEO,
        payload
    }
}

export const unfavoriteVideo = payload => {
    return {
        type: UNFAVORITE_VIDEO,
        payload
    }
}