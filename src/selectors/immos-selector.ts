import {createSelector} from "reselect";

const selectPagination = state => state.page.pagination
const selectimmos = (state) => state.immobilier.immos
const selectPerPage = state => state.page.pagination.perPage

export const getTotal = createSelector(
    [selectimmos],
    (immos) => immos ? immos.length : 0
)


export const getSliceImmos = createSelector(
    [selectPagination,selectimmos],
    (pagination,immos) => {
        if(pagination && immos ){
            return immos.slice(pagination.offset, pagination.offset + pagination.perPage)
        }
        return null
    }
)

export const getPageCount = createSelector(
    [getTotal,selectPerPage],
    (total,perPage) => {
        if(total && perPage ){
            return Math.ceil(total / perPage)
        }
        return 1
    }
)
