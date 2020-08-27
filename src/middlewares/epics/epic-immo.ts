import {IMMO_GET_ALL, IMMO_GET_BY_FILTERS, IMMO_GET_ONE} from "../../constants/constants-immo";
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";
import {
    fetchAllImmosError,
    fetchAllImmosSuccess,
    fetchByFiltersError,
    fetchByFiltersSuccess, fetchOneByIdError, fetchOneByIdSuccess
} from "../../actions/actions-immos";
import {catchError, map, mergeMap, retry, takeUntil} from "rxjs/operators";
import {ofType} from "redux-observable";
import {IMMO_POST_NEW} from "../../constants/constants-admin";

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
                    return  of(fetchAllImmosError(error) )
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
               return ajax.post(link + action.payload.link, filters,headers)
                    .pipe(
                        map( (req:any) => fetchByFiltersSuccess(req.response)),
                        takeUntil(action$.ofType(IMMO_GET_BY_FILTERS)),
                        retry(2),
                        catchError(error => {
                            console.log(error)
                            return of(fetchByFiltersError(error))
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
                    return  of(fetchOneByIdError(error) )
                } )
            )
        )
    )
)

export const epic_postNewImmo = (action$,state$) => (
    action$.pipe(
        ofType(IMMO_POST_NEW),
        mergeMap( (action:any) => {
            let url = action.payload.link
            let data = action.payload.data
            // let headers = { 'Content-Type': 'multipart/form-data' }
            return ajax.post(linkAdmin + url, data)
                .pipe(
                    map( (req:any) => fetchByFiltersSuccess(req.response)),
                    takeUntil(action$.ofType(IMMO_POST_NEW)),
                    retry(2),
                    catchError(error => {
                        console.log(error)
                        return of(fetchByFiltersError(error))
                    })
                ) }
        )
    )
)
