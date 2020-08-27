import {IMMO_POST_NEW_SUCCESS, RESET_IN_ADMIN} from "../constants/constants-admin";


const reset = {}

export const adminReducer = (state = reset, action) => {
    switch (action.type) {
        //add new immo
        case IMMO_POST_NEW_SUCCESS :
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

