import jwt_decode from 'jwt-decode'

export const dataToken = (token = localStorage.getItem('Authorization') ) : Object | false => {

    if(token){
        try{
            let decodedToken : any =  jwt_decode(token)
            if(decodedToken['comeFrom'] !== 'immobilierApp' ) {
                return false
            }else if (decodedToken['exp'] > Date.now() ){
                localStorage.removeItem('Authorization')
                return false
            }else{
                return decodedToken
            }
        }
        catch(Error){
            return false
        }
    }else{
        return false
    }

}
