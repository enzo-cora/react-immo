import {combineEpics} from "redux-observable";
import {epic_getAllImmos} from "./epic-immo";

export const rootEpic =  combineEpics(
    epic_getAllImmos
)
