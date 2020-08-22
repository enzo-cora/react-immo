import React from 'react';
import css from './header.module.css'
import {Link} from 'react-router-dom'

const Header = ()=> {
    return (
        <header className={css.menuHeader} >
            <p>Transactimo</p>
            <ul className={css.ulHeader}>
                <Link className={css.Link} to='/accueil'>Accueil</Link>
                <Link to='/immobilier/acheter'>Acheter</Link>
                <Link to='/immobilier/louer'>Louer</Link>
                <Link to='/articles'>Articles</Link>
            </ul>

            <ul className={css.ulHeader}>
                <Link to='/aPropos'>L'agence</Link>
                <button>Contact</button>
                <Link to='/auth/connexion'>Connexion</Link>
                <Link to='/auth/inscription'>Inscription</Link>
                <Link to='/auth/compte'>Mon compte</Link>
            </ul>
        </header>

    );
}

export default Header;
