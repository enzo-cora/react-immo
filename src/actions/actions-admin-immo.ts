import {ADMIN_POST_NEW_IMMO, ADMIN_POST_NEW__IMMO_SUCCESS, RESET_IN_ADMIN} from "../constants/constants-admin";

//Post new logement
export const fetchNewImmo = (data) => ({
    type : ADMIN_POST_NEW_IMMO,
    payload : {link : '/newImmo',data}
})
export const fetchNewImmoSuccess = (resp) => ({
    type : ADMIN_POST_NEW__IMMO_SUCCESS,
    payload : resp
})

//----------------RESET THIS---------------------
export const resetInAdmin = (resetThis) => ({
    type : RESET_IN_ADMIN,
    payload : resetThis
})
