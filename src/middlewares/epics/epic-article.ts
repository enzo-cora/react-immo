
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";
import {catchError, map, mergeMap, retry, takeUntil} from "rxjs/operators";
import {ofType} from "redux-observable";
import {ADMIN_GET_ALL_ARTICLE, ADMIN_POST_NEW_ARTICLE} from "../../constants/constants-admin";
import {fetchAllArticlesSuccess, fetchNewArticleSuccess} from "../../actions/actions-admin-immo";
import {fetchError} from "../../reducers/root-reducer";
import {headerToken} from "../functions/makeHeaderToken";

// let link = window.location.protocol +'//'+ window.location.hostname + '/api1/articles'
let linkAdmin = window.location.protocol +'//'+ window.location.hostname + '/api1/admin/articles'

/*
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
)*/

//----------------------------ADMIN ----------------------------------------------

export const epic_getAllArticles = (action$) => (
    action$.pipe(
        ofType(ADMIN_GET_ALL_ARTICLE),
        mergeMap( (action:any) => ajax.getJSON(linkAdmin + action.payload.link,headerToken())
            .pipe(
                map((articles:any) => fetchAllArticlesSuccess(articles) ),
                takeUntil(action$.ofType(ADMIN_GET_ALL_ARTICLE)),
                retry(2),
                catchError(error => {
                    console.log(error)
                    return  of(fetchError(error) )
                } )
            )
        )
    )
)


export const epic_postNewArticle = (action$) => (
    action$.pipe(
        ofType(ADMIN_POST_NEW_ARTICLE),
        mergeMap( (action:any) => {
            let url = action.payload.link
            let data = action.payload.data
            return ajax.post(linkAdmin + url, data, headerToken())
                .pipe(
                    map( (req:any) => fetchNewArticleSuccess(req.response)),
                    takeUntil(action$.ofType(ADMIN_POST_NEW_ARTICLE)),
                    retry(2),
                    catchError(error => {
                        console.log(error)
                        return of(fetchError(error))
                    })
                ) }
        )
    )
)

