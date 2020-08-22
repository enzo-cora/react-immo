import {IMMO_GET_ALL} from "../../constants/constants-immo";
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";
import {fetchAllImmosError, fetchAllImmosSuccess} from "../../actions/actions-immos";
import {catchError, map, mergeMap, retry, takeUntil} from "rxjs/operators";
import {ofType} from "redux-observable";

let link = window.location.protocol +'//'+ window.location.hostname + '/api1/immobilier'

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
                    return  of(fetchAllImmosError() )
                } )
            )
        )
    )
)
