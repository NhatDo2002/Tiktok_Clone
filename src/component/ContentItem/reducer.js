import { LIKE_VIDEO, UNLIKE_VIDEO, FAVORITE_VIDEO, UNFAVORITE_VIDEO} from "./constants"

export const initState = {
    liked: false,
    favorited: false
}

export const reducer = (state, action) => {
    let newState

    switch(action.type){
        case LIKE_VIDEO:
            newState = {...state}
            newState.liked = true
            console.log(newState)
            return newState
        case UNLIKE_VIDEO:
            newState = {...state}
            newState.liked = false
            console.log(newState)
            return newState
        case FAVORITE_VIDEO:
            newState = {...state}
            newState.favorited = true
            console.log(newState)
            return newState
        case UNFAVORITE_VIDEO:
            newState = {...state}
            newState.favorited = false
            console.log(newState)
            return newState
        default:
            throw new Error("Invalid Action")
    }
}