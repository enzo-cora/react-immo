import {IMMO_GET_ALL_ERROR, IMMO_GET_ALL_SUCCESS} from "../constants/constants-immo";

const initialState = {
    maison : "voici une maison",
    maiseon : "voici une maison",
    maeison : "voici une maison",
    maisofn : "voici une maison"
}

export const immosReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case IMMO_GET_ALL_SUCCESS:
            return action.payload
        case IMMO_GET_ALL_ERROR:
            return {}
        default :
            return state
    }
}

