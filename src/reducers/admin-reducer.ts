import {ADMIN_POST_NEW__IMMO_SUCCESS, RESET_IN_ADMIN} from "../constants/constants-admin";


const reset = {}

export const adminReducer = (state = reset, action) => {
    switch (action.type) {
        //add new immo
        case ADMIN_POST_NEW__IMMO_SUCCESS :
            return {...state, resp : action.payload}

        case RESET_IN_ADMIN:
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
            return state
    }
}

