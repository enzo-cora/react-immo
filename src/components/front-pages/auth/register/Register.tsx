import React, {FunctionComponent, useEffect} from 'react';
import {connect} from "react-redux";
import {fetchRegister, resetInAuth} from "../../../../actions/actions-auth";
import {useHistory} from 'react-router'

type state = {
    fetchRegister( data : Object) : any,
    respSuccess : Object
}

const Register : FunctionComponent<state> = ({fetchRegister,respSuccess})=> {

    let history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        let elems = e.target.elements
        let data : any = {}
        for (let elem of elems ) {
            if(elem.type === 'checkbox'){
                data[elem.name] = elem.checked
            }
            else if(elem.type !== 'submit'){
                data[elem.name] = elem.value

            }
        }
        fetchRegister(data)
    }

    useEffect(()=>{

        if (respSuccess){
            resetInAuth('respSuccess')
            history.push('/auth/connexion')
        }
    },[respSuccess]) // eslint-disable-line

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Mail
                        <input required type="text" name={'mail'}/>
                    </label>
                </div>

                <div>
                    <label>Mot de passe
                        <input required type="password" name={'mdp'}/>
                    </label>
                </div>

                <div>
                    <select required name="sexe">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </div>

                <div>
                    <label>Nom
                        <input required type="text" name={'nom'}/>
                    </label>
                </div>

                <div>
                    <label>Prenom
                        <input required type="text" name={'prenom'}/>
                    </label>
                </div>

                <div><label>Telephone
                    <input required type="number" name="phone"/>
                </label></div>

                <div>
                    <label>Pays
                        <input required type="text" name={'pays'}/>
                    </label>
                </div>

                <div><label>Ville
                    <input required type="text" name="ville"/>
                </label></div>

                <div><label>Rue
                    <input required type="text" name="street"/>
                </label></div>

                <div><label>Code postal
                    <input required type="number" name="cp"/>
                </label></div>

                <div><label>Voulez vous recevoir des pubs ...
                    <input type="checkbox" name="pub1"/>
                </label></div>

                <div><label>Voulez vous recevoir des promos ...
                    <input type="checkbox" name="pub2"/>
                </label></div>



                <button type={'submit'}>Inscription</button>
            </form>
        </>
    );
}

const mapStateToProps = (state :any) => ({
    respSuccess : state.auth.respSuccess
})

const mapDispatchToProps = {
    fetchRegister,
    resetInAuth
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)

