import {combineReducers} from "redux";
import {immosReducer} from "./immos-reducer";
import {pageReducer} from "./page-reducer";
import {adminReducer} from "./admin-reducer";
import {authReducer} from "./auth-reducer";

//------------ERROR HANDLER--------------------
/*Constante*/export const SHOW_ERROR = 'SHOW_ERROR'

/*Action Creator*/export const fetchError = (error) => ({
    type : SHOW_ERROR,
    payload : error
})
/*ErrorReducer*/const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return action.payload
        default :
            return {}
    }
}

//--------------ROOT Reducer ---------------------
const appReducer = combineReducers({
    immobilier : immosReducer,
    page : pageReducer,
    admin : adminReducer,
    error : errorReducer,
    auth : authReducer
})

const rootReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            console.log(action.payload)
            break

    }
    return appReducer(state, action);
};
export default rootReducer

