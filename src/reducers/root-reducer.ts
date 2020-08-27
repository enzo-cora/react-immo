import {combineReducers} from "redux";
import {immosReducer} from "./immos-reducer";
import {pageReducer} from "./page-reducer";
import {adminReducer} from "./admin-reducer";


const appReducer = combineReducers({
    immobilier : immosReducer,
    page : pageReducer,
    admin : adminReducer
})

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'RESET_ALL':
            state = {}
            break

    }
    return appReducer(state, action);
};

export default rootReducer
