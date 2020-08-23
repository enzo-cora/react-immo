import '../constants/constants-immo'
import {IMMO_GET_ALL, IMMO_GET_ALL_ERROR, IMMO_GET_ALL_SUCCESS} from "../constants/constants-immo";
import {Immobilier} from "../models/immobilier";

//GET ALL IMMO
export const fetchAllImmos = () => ({
    type : IMMO_GET_ALL,
    payload : {link : '/'}
})
export const fetchAllImmosSuccess = (immo : Immobilier) => ({
    type : IMMO_GET_ALL_SUCCESS,
    payload : {immo}
})
export const fetchAllImmosError = () => ({
    type : IMMO_GET_ALL_ERROR,
})

//GET_By_FILTER
