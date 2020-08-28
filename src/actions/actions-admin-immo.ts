import {
    ADMIN_POST_NEW_IMMO,
    ADMIN_POST_NEW_IMMO_SUCCESS,
    RESET_IN_ADMIN,
    ADMIN_POST_NEW_ARTICLE, ADMIN_POST_NEW_ARTICLE_SUCCESS, ADMIN_GET_ALL_ARTICLE, ADMIN_GET_ALL_ARTICLE_SUCCESS
} from "../constants/constants-admin";
import {Article} from "../models/article";

//Admin Post new Logement
export const fetchNewImmo = (data) => ({
    type : ADMIN_POST_NEW_IMMO,
    payload : {link : '/newImmo',data}
})
export const fetchNewImmoSuccess = (resp) => ({
    type : ADMIN_POST_NEW_IMMO_SUCCESS,
    payload : resp
})

//Admin Post new Article
export const fetchNewArticle = (data) => ({
    type : ADMIN_POST_NEW_ARTICLE,
    payload : {link : '/publish',data}
})
export const fetchNewArticleSuccess = (resp) => ({
    type : ADMIN_POST_NEW_ARTICLE_SUCCESS,
    payload : resp
})

//Admin get All Articles
export const fetchAllArticles = () => ({
    type : ADMIN_GET_ALL_ARTICLE,
    payload : {link : '/getAll'}
})
export const fetchAllArticlesSuccess = (articles : Article) => ({
    type : ADMIN_GET_ALL_ARTICLE_SUCCESS,
    payload : articles
})
//----------------RESET THIS IN ADMIN---------------------
export const resetInAdmin = (resetThis) => ({
    type : RESET_IN_ADMIN,
    payload : resetThis
})
