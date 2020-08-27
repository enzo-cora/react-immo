import {AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, RESET_IN_AUTH} from "../constants/constants-auth";

//Login
export const fetchLogin = (data) => ({
    type : AUTH_LOGIN,
    payload : {data, link : '/login'}
})
export const fetchLoginSuccess = (token) => ({
    type : AUTH_LOGIN_SUCCESS,
    payload : token
})

//logout
export const authLogout = () => ({
    type : AUTH_LOGOUT,
})

//Reset un Auth
export const resetInAuth = (resetThis) => ({
    type : RESET_IN_AUTH,
    payload : resetThis
})
