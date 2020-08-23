import {combineReducers} from "redux";
import {immosReducer} from "./immos-reducer";

const rootReducer = combineReducers({
    immobilier : immosReducer,
})


export default rootReducer
