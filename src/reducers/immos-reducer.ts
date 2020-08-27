import {
    IMMO_GET_ALL_SUCCESS,
    IMMO_GET_BY_FILTERS_SUCCESS,
    IMMO_GET_ONE_SUCCESS,
    RESET_IN_IMMO,
} from "../constants/constants-immo";

const reset = {}

export const immosReducer = (state = reset, action) => {
    switch (action.type) {
        //Get All
        case IMMO_GET_ALL_SUCCESS:
            return {...state, immos : action.payload}
        //Get sommes by filters
        case IMMO_GET_BY_FILTERS_SUCCESS:
            return {...state, immos : action.payload}
        //get one by id
        case IMMO_GET_ONE_SUCCESS:
            return {...state, details : action.payload}


        //make reset in Immobilier
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

