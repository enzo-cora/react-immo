import {ajax} from "rxjs/ajax";
import {of} from "rxjs";
import {catchError, map, mergeMap, retry, takeUntil} from "rxjs/operators";
import {ofType} from "redux-observable";
import {fetchError} from "../../reducers/root-reducer";
import {AUTH_LOGIN} from "../../constants/constants-auth";
import {fetchLoginSuccess} from "../../actions/actions-auth";

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
                    retry(2),
                    catchError(error => {
                            console.log(error)
                            return of(fetchError(error))
                    })
                ) }
        )
    )
)

