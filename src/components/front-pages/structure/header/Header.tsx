import React, {FunctionComponent} from 'react';
import css from './header.module.css'
import {Link} from 'react-router-dom'
import {authLogout} from "../../../../actions/actions-auth";
import {connect} from "react-redux";
import {User} from "../../../../models/user";

type state = {
    authLogout() : void,
    auth : {
        isAuth : boolean,
        user : User
    }

}

const Header : FunctionComponent<state> = ({authLogout,auth,...rest})=> {

    const handleLogout = ()=>{
        authLogout()
    }

    return (
        <header className={css.menuHeader} >
            <p>Transactimo</p>
            {auth.isAuth && auth.user.isAdmin &&
            <button><Link className={css.Link} to='/admin'>Admin</Link></button>}
            <ul className={css.ulHeader}>
                <Link className={css.Link} to='/accueil'>Accueil</Link>
                <Link to='/immobilier/acheter'>Acheter</Link>
                <Link to='/immobilier/louer'>Louer</Link>
                <Link to='/articles'>Articles</Link>
            </ul>

            <ul className={css.ulHeader}>
                <Link to='/aPropos'>L'agence</Link>
                <Link to='/contact'>Contact</Link>
                {!auth.isAuth && <>
                    <button><Link to='/auth/connexion'>Connexion</Link></button>
                    <button><Link to='/auth/inscription'>Inscription</Link></button>
                </>}
                {auth.isAuth && <>
                    <button><Link to='/auth/compte'>Mon compte</Link></button>
                    <button onClick={handleLogout}>Deconnexion</button>
                </>}

                {}
            </ul>
        </header>

    );
}
const mapStateToProps = (state:any)=>({
    auth : state.auth,
})

const mapDispatchToProps = {
    authLogout,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

