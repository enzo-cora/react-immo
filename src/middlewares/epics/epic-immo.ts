import {IMMO_GET_ALL, IMMO_GET_BY_FILTERS, IMMO_GET_ONE} from "../../constants/constants-immo";
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";
import {fetchAllImmosSuccess,    fetchByFiltersSuccess, fetchOneByIdSuccess
} from "../../actions/actions-immos";
import {catchError, map, mergeMap, retry, takeUntil} from "rxjs/operators";
import {ofType} from "redux-observable";
import {ADMIN_POST_NEW_IMMO} from "../../constants/constants-admin";
import {fetchNewImmoSuccess} from "../../actions/actions-admin-immo";
import {fetchError} from "../../reducers/root-reducer";
import {headerToken} from "../functions/makeHeaderToken";

let link = window.location.protocol +'//'+ window.location.hostname + '/api1/immobilier'
let linkAdmin = window.location.protocol +'//'+ window.location.hostname + '/api1/admin/immo'

export const epic_getAllImmos = action$ => (
    action$.pipe(
        ofType(IMMO_GET_ALL),
        mergeMap( (action:any) => ajax.getJSON(link + action.payload.link)
            .pipe(
                map((immos:any) => fetchAllImmosSuccess(immos) ),
                takeUntil(action$.ofType(IMMO_GET_ALL)),
                retry(2),
                catchError(error => {
                    console.log(error)
                    return  of(fetchError(error) )
                } )
            )
        )
    )
)



export const epic_getImmosByFilter = (action$,state$) => (
    action$.pipe(
        ofType(IMMO_GET_BY_FILTERS),
        mergeMap( (action:any) => {
            let filters = state$.value.page.filters
            let headers = { 'Content-Type': 'application/json' }
               return ajax.post(link + action.payload.link, filters,headerToken(headers))
                    .pipe(
                        map( (req:any) => fetchByFiltersSuccess(req.response)),
                        takeUntil(action$.ofType(IMMO_GET_BY_FILTERS)),
                        retry(2),
                        catchError(error => {
                            console.log(error)
                            return of(fetchError(error))
                        })
            ) }
        )
    )
)

export const epic_getOneById = (action$) => (
    action$.pipe(
        ofType(IMMO_GET_ONE),
        mergeMap( (action:any) => ajax.getJSON(link + action.payload.link)
            .pipe(
                map((immo:any) => fetchOneByIdSuccess(immo) ),
                takeUntil(action$.ofType(IMMO_GET_ONE)),
                retry(2),
                catchError(error => {
                    console.log(error)
                    return  of(fetchError(error) )
                } )
            )
        )
    )
)

//----------------------------ADMIN ----------------------------------------------

export const epic_postNewImmo = (action$) => (
    action$.pipe(
        ofType(ADMIN_POST_NEW_IMMO),
        mergeMap( (action:any) => {
            let url = action.payload.link
            let data = action.payload.data
            return ajax.post(linkAdmin + url, data, headerToken())
                .pipe(
                    map( (req:any) => fetchNewImmoSuccess(req.response)),
                    takeUntil(action$.ofType(ADMIN_POST_NEW_IMMO)),
                    retry(2),
                    catchError(error => {
                        console.log(error)
                        return of(fetchError(error))
                    })
                ) }
        )
    )
)

