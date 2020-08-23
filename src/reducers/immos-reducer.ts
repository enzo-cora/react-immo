import {IMMO_GET_ALL_ERROR, IMMO_GET_ALL_SUCCESS} from "../constants/constants-immo";

const initialState = {
    maison : "voici une maison",
}

export const immosReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case IMMO_GET_ALL_SUCCESS:
            console.log('caca', action.payload)
            return action.payload
        case IMMO_GET_ALL_ERROR:
            return {}
        default :
            return state
    }
}

