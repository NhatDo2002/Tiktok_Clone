import { RETURNED_MAIN, LOGIN_EMAIL, LOGIN_QR } from './constants'

export const returnMain = ( payload ) => {
    return {
        type: RETURNED_MAIN,
        payload
    }
}

export const loginEmail = ( payload ) => {
    return {
        type: LOGIN_EMAIL,
        payload
    }
}

export const loginQR = ( payload ) => {
    return {
        type: LOGIN_QR,
        payload
    }
}