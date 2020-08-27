import {createSelector} from "reselect";

const selectUser = state => state.auth.user
const selectIsAuth = state => state.auth.isAuth


export const getIsAdmin = createSelector(
    [selectUser,selectIsAuth],
    (user,isAuth) => {
        if(user && isAuth ){
            return user.isAdmin
        }
        return false
    }
)
