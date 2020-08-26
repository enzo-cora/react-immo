import {combineReducers} from "redux";
import {immosReducer} from "./immos-reducer";
import {pageReducer} from "./page-reducer";

/*
const rootReducer = combineReducers({
    immobilier : immosReducer,
    page : pageReducer
})

export default rootReducer
*/

const appReducer = combineReducers({
    immobilier : immosReducer,
    page : pageReducer
})

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'RESET_ALL':
            state = undefined
            break
        case 'RESET_IMMO':
            state = {...state, immobilier: {}}
            break
        case 'RESET_PAGE':
            state = {...state, page: {}}
            break

    }
    return appReducer(state, action);
};

export default rootReducer
