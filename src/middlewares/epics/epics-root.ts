import {combineEpics} from "redux-observable";
import {epic_getAllImmos, epic_getImmosByFilter, epic_getOneById, epic_postNewImmo} from "./epic-immo";

export const rootEpic =  combineEpics(
    epic_getAllImmos,
    epic_getImmosByFilter,
    epic_getOneById,
    epic_postNewImmo,
)
