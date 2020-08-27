import {combineEpics} from "redux-observable";
import {epic_getAllImmos, epic_getImmosByFilter, epic_getOneById, epic_postNewImmo} from "./epic-immo";
import {epic_login, epic_register} from "./epic-auth";

export const rootEpic =  combineEpics(
    epic_getAllImmos,
    epic_getImmosByFilter,
    epic_getOneById,
    epic_postNewImmo,
    epic_login,
    epic_register
)
