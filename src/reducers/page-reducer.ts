import {
    RESET_IN_PAGE,
    SAVE_ELEMENT_SCROLL_POSITION,
    SAVE_FILTERS,
    SAVE_COME_FROM,
    SAVE_PAGINATION
} from "../constants/constants-page";

//Quand le state vaut undefined
const reset = {pagination : {offset: 0, perPage: 10, currentPage: 0}}

export const pageReducer = (state:any = reset, action) => {
    switch (action.type) {
        //Save Filters
        case SAVE_FILTERS:
            return {...state, filters : action.payload}
        //Sabe Pages infos
        case SAVE_PAGINATION:
            return {...state, pagination : {...state.pagination,...action.payload}}
        case SAVE_ELEMENT_SCROLL_POSITION:
            return {...state, scrollElement : action.payload}
        case SAVE_COME_FROM:
            return {...state, comeFrom : action.payload}
        case RESET_IN_PAGE:
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
