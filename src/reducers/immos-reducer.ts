import {
    IMMO_GET_ALL_ERROR,
    IMMO_GET_ALL_SUCCESS, IMMO_GET_BY_FILTERS_ERROR,
    IMMO_GET_BY_FILTERS_SUCCESS, IMMO_GET_ONE_ERROR, IMMO_GET_ONE_SUCCESS, RESET_IN_IMMO,
} from "../constants/constants-immo";

const reset = {}

export const immosReducer = (state = reset, action) => {
    switch (action.type) {
        //Get All
        case IMMO_GET_ALL_SUCCESS:
            return {...state, immos : action.payload}
        case IMMO_GET_ALL_ERROR:
            return reset
        //Get sommes by filters
        case IMMO_GET_BY_FILTERS_SUCCESS:
            return {...state, immos : action.payload}
        case IMMO_GET_BY_FILTERS_ERROR :
            return reset
        //get one by id
        case IMMO_GET_ONE_SUCCESS:
            return {...state, details : action.payload}
        case IMMO_GET_ONE_ERROR :
            return reset

        case RESET_IN_IMMO:
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
