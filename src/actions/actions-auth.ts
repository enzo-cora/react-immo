import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    RESET_IN_AUTH
} from "../constants/constants-auth";

//Login
export const fetchLogin = (data) => ({
    type : AUTH_LOGIN,
    payload : {data, link : '/login'}
})
export const fetchLoginSuccess = (respData) => ({
    type : AUTH_LOGIN_SUCCESS,
    payload : respData
})

//Register
export const fetchRegister = (data) => ({
    type : AUTH_REGISTER,
    payload : {data, link : '/register'}
})
export const fetchRegisterSuccess = (resp) => ({
    type : AUTH_REGISTER_SUCCESS,
    payload : resp
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
