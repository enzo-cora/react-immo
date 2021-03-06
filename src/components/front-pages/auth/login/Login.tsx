import React, {FunctionComponent } from 'react';
import {connect} from "react-redux";
import {fetchLogin} from "../../../../actions/actions-auth";

type state = {
    fetchLogin( data : Object) : any,
    isAuth : boolean
}

const Login : FunctionComponent<state> = ({fetchLogin,isAuth})=> {

    const handleSubmit = (e) => {
        e.preventDefault()
        let elems = e.target.elements
        let data : any = {}
        for (let elem of elems ) {
            if(elem.type !== 'submit'){
                data[elem.name] = elem.value
            }
        }
        fetchLogin(data)
    }


    return (
            <>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Mail
                            <input type="text" name={'mail'}/>
                        </label>
                    </div>

                    <div>
                        <label>Mot de passe
                            <input type="password" name={'mdp'}/>
                        </label>
                    </div>

                    <button type={'submit'}>Connexion</button>
                </form>
            </>
    );
}

const mapStateToProps = (state :any) => ({
    isAuth : state.isAuth
})

const mapDispatchToProps = {
    fetchLogin,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

