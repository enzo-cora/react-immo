import {ajax} from "rxjs/ajax";
import {of} from "rxjs";
import {catchError, map, mergeMap, retry, takeUntil} from "rxjs/operators";
import {ofType} from "redux-observable";
import {fetchError} from "../../reducers/root-reducer";
import {AUTH_LOGIN, AUTH_REGISTER} from "../../constants/constants-auth";
import {fetchLoginSuccess, fetchRegisterSuccess} from "../../actions/actions-auth";

let link = window.location.protocol +'//' + window.location.hostname + '/api1/authentification'
// let linkAdmin = window.location.protocol +'//'+ window.location.hostname + '/api1/admin/immo'

export const epic_login = (action$) => (
    action$.pipe(
        ofType(AUTH_LOGIN),
        mergeMap( (action:any) => {
            let url = action.payload.link
            let data = action.payload.data
            let headers = { 'Content-Type': 'application/json' }
            return ajax.post(link + url, data,headers)
                .pipe(
                    map( (req:any) => fetchLoginSuccess(req.response)),
                    takeUntil(action$.ofType(AUTH_LOGIN)),
                    catchError(error => {
                            console.log(error)
                            return of(fetchError(error))
                    })
                ) }
        )
    )
)

export const epic_register = (action$) => (
    action$.pipe(
        ofType(AUTH_REGISTER),
        mergeMap( (action:any) => {
            let url = action.payload.link
            let data = action.payload.data
            let headers = { 'Content-Type': 'application/json' }
            return ajax.post(link + url, data,headers)
                .pipe(
                    map( (req:any) => fetchRegisterSuccess(req.response)),
                    takeUntil(action$.ofType(AUTH_REGISTER)),
                    retry(2),
                    catchError(error => {
                        console.log(error)
                        return of(fetchError(error))
                    })
                ) }
        )
    )
)
