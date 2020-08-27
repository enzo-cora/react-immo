import {IMMO_POST_NEW, IMMO_POST_NEW_ERROR, IMMO_POST_NEW_SUCCESS, RESET_IN_ADMIN} from "../constants/constants-admin";

//Post new logement
export const fetchNewImmo = (data) => ({
    type : IMMO_POST_NEW,
    payload : {link : '/newImmo',data}
})
export const fetchNewImmoSuccess = (resp) => ({
    type : IMMO_POST_NEW_SUCCESS,
    payload : resp
})
export const fetchNewImmoError = (error) => ({
    type : IMMO_POST_NEW_ERROR,
    payload : error
})

//----------------RESET THIS---------------------
export const resetInAdmin = (resetThis) => ({
    type : RESET_IN_ADMIN,
    payload : resetThis
})
