import '../constants/constants-immo'
import {
    IMMO_GET_ALL,
    IMMO_GET_ALL_ERROR,
    IMMO_GET_ALL_SUCCESS,
    IMMO_GET_BY_FILTERS,
    IMMO_GET_BY_FILTERS_ERROR,
    IMMO_GET_BY_FILTERS_SUCCESS,
    IMMO_GET_ONE,
    IMMO_GET_ONE_ERROR,
    IMMO_GET_ONE_SUCCESS, RESET_IN_IMMO,
} from "../constants/constants-immo";
import {Immobilier} from "../models/immobilier";
import {RESET_IN_PAGE} from "../constants/constants-page";

//-------------------GET ALL IMMO-------------------
export const fetchAllImmos = () => ({
    type : IMMO_GET_ALL,
    payload : {link : '/'}
})
export const fetchAllImmosSuccess = (immos : Immobilier) => ({
    type : IMMO_GET_ALL_SUCCESS,
    payload : immos
})
export const fetchAllImmosError = () => ({
    type : IMMO_GET_ALL_ERROR,
})

//------------------GET SOMES BY FILTERS-------------------
export const fetchByFilters = () => ({
    type : IMMO_GET_BY_FILTERS,
    payload : {link : '/filter'}
})
export const fetchByFiltersSuccess = (immos : Immobilier) => ({
    type : IMMO_GET_BY_FILTERS_SUCCESS,
    payload : immos
})
export const fetchByFiltersError = () => ({
    type : IMMO_GET_BY_FILTERS_ERROR,
})


//----------------GET ONE BY ID---------------------
export const fetchOneById = (id) => ({
    type : IMMO_GET_ONE,
    payload : {link : `/findOne/${id}`}
})
export const fetchOneByIdSuccess = (immo) => ({
    type : IMMO_GET_ONE_SUCCESS,
    payload : immo
})
export const fetchOneByIdError = () => ({
    type : IMMO_GET_ONE_ERROR,
})

//----------------RESET THIS---------------------
export const resetInImmo = (resetThis) => ({
    type : RESET_IN_IMMO,
    payload : resetThis
})
