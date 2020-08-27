import React, {FunctionComponent} from 'react';
import css from './header.module.css'
import {Link} from 'react-router-dom'
import {authLogout} from "../../../../actions/actions-auth";
import {connect} from "react-redux";

type state = {
    authLogout() : void,
    isAuth? : boolean
}

const Header : FunctionComponent<state> = ({authLogout,isAuth,...rest})=> {

    const handleLogout = ()=>{
        authLogout()
    }

    return (
        <header className={css.menuHeader} >
            <p>Transactimo</p>
            <button><Link className={css.Link} to='/admin'>Admin</Link></button>
            <ul className={css.ulHeader}>
                <Link className={css.Link} to='/accueil'>Accueil</Link>
                <Link to='/immobilier/acheter'>Acheter</Link>
                <Link to='/immobilier/louer'>Louer</Link>
                <Link to='/articles'>Articles</Link>
            </ul>

            <ul className={css.ulHeader}>
                <Link to='/aPropos'>L'agence</Link>
                <Link to='/'>Contact</Link>
                {!isAuth && <>
                    <button><Link to='/auth/connexion'>Connexion</Link></button>
                    <button><Link to='/auth/inscription'>Inscription</Link></button>
                </>}
                {isAuth && <>
                    <button><Link to='/auth/compte'>Mon compte</Link></button>
                    <button onClick={handleLogout}>Deconnexion</button>
                </>}

                {}
            </ul>
        </header>

    );
}
const mapStateToProps = (state:any)=>({
    isAuth : state.auth.isAuth
})

const mapDispatchToProps = {
    authLogout,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

