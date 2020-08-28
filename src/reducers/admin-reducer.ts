import {
    ADMIN_GET_ALL_ARTICLE_SUCCESS,
    ADMIN_POST_NEW_ARTICLE_SUCCESS,
    ADMIN_POST_NEW_IMMO_SUCCESS,
    RESET_IN_ADMIN
} from "../constants/constants-admin";


const reset = {}

export const adminReducer = (state = reset, action) => {
    switch (action.type) {
        //add new immo
        case ADMIN_POST_NEW_IMMO_SUCCESS :
            return {...state, respSuccess : action.payload}

        //get all articles
        case ADMIN_GET_ALL_ARTICLE_SUCCESS :
            return {...state, articles : action.payload}

        //post new article
        case ADMIN_POST_NEW_ARTICLE_SUCCESS :
            return {...state, respSuccess : action.payload}



        //reset field(s) in admin
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
            return {...state,respSuccess: undefined}
    }
}

