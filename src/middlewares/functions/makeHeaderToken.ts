

//Make header 'Authorization' if there are token
export const headerToken = (headers? : Object) => {
    let token = localStorage.getItem('Authorization')
    if(token){
        return  {'Authorization' : token,...headers}
    }
    else {
        return {}
    }
}
