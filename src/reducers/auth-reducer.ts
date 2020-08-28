import {AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_REGISTER_SUCCESS, RESET_IN_AUTH} from "../constants/constants-auth";
import {dataToken} from "../middlewares/functions/getDataToken";

const reset = {isAuth : false}

export const authReducer = (state = reset, action) => {
    switch (action.type) {
        //Login
        case AUTH_LOGIN_SUCCESS :
            localStorage.setItem('Authorization','Bearer ' + action.payload.token);
            const {_id,isAdmin} = action.payload.user
            return {user : {_id,isAdmin}, isAuth : true}

        //Register
        case AUTH_REGISTER_SUCCESS :
            return {...state,respSuccess : action.payload}

        //Logout
        case AUTH_LOGOUT :
            localStorage.clear();
            return reset

        //Reset in Auth
        case RESET_IN_AUTH:
            if(Array.isArray(action.payload)){
                action.payload.forEach(elem =>{
                    state = {...state, [elem] : undefined}
                })
                return state
            }
            else if(action.payload === '*'){
                return reset
            }
            else{
                return {...state, [action.payload] : undefined}
            }

        default :
            if(state.isAuth){
                return state
            }
            let unverifiedToken = localStorage.getItem('Authorization')
            if(unverifiedToken){
                let token = dataToken(unverifiedToken)
                if(token){
                    return {...state, isAuth : true, user : {isAdmin : token['isAdmin'], _id : token['userId']}}
                }
                else{
                    return reset
                }
            }
            return reset
    }
}

