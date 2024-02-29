import { RETURNED_MAIN, LOGIN_EMAIL, LOGIN_QR } from './constants'
import { LoginEmail, LoginQR } from "../LoginMenu";


export const initState = {
    main: true,
    locate: ""
}

export const reducer = (state, action) => {
    let newState

    switch(action.type){
        case RETURNED_MAIN:
            newState = {...state}
            newState.main = true
            return newState
        case LOGIN_EMAIL:
            newState = {...state}
            newState.main = false
            newState.locate = <LoginEmail />
            return newState
        case LOGIN_QR:
            newState = {...state}
            newState.main = false
            newState.locate = <LoginQR />
            return newState
        default:
            throw new Error("Invalid Action")
    }
}