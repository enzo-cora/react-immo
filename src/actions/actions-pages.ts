//SAVES FILTERS
import {
    RESET_IN_PAGE,
    SAVE_ELEMENT_SCROLL_POSITION,
    SAVE_FILTERS,
    SAVE_COME_FROM,
    SAVE_PAGINATION
} from "../constants/constants-page";

export const saveFilters = (filters) => ({
    type : SAVE_FILTERS,
    payload : filters
})

//SAVA PAGES INFOS
export const savePagination = (filters) => ({
    type : SAVE_PAGINATION,
    payload : filters
})

//reset this
export const resetInPage = (resetThis) => ({
    type : RESET_IN_PAGE,
    payload : resetThis
})

//save element scroll postion
export const saveScrollElement = (offSetTop) => ({
    type : SAVE_ELEMENT_SCROLL_POSITION,
    payload : offSetTop
})

//save page come from
export const saveComeFrom = (comeFrom) => ({
    type : SAVE_COME_FROM,
    payload : comeFrom
})

