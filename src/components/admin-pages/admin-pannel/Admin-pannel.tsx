import React from 'react';
import css from './admin-pannel.module.css'
import {Link, Route,Switch} from 'react-router-dom'
import NewImmo from "../new-immo/New-immo";

const AdminPannel = ()=> {
    let url  ='/admin'
    return (
        <>
            <header className={css.menuAdmin} >
                <h3>Admin</h3>
                <Link to='/'><button>Retour</button></Link>
                <ul className={css.ulAdmin}>
                    <div>Voir tous :</div>
                    <li><Link to='/admin/immo/show'><button>immo</button></Link></li>
                    <li><Link to='/aPropos'><button>Articles</button></Link></li>
                    <li><Link to='/aPropos'><button>utilisateurs</button></Link></li>
                </ul>

                <ul className={css.ulAdmin}>
                    <div>Ajouter :</div>
                    <li><Link to='/admin/immo/new'><button>immo</button></Link></li>
                    <li><Link to='/aPropos'><button>Articles</button></Link></li>
                </ul>

                <ul className={css.ulAdmin}>
                    <div>Modifier :</div>
                    <li><Link to='/aPropos'><button>Agence</button></Link></li>
                </ul>
            </header>

            <Switch>
                <Route path={`${url}/immo`} render={({ match: { url } }) => (
                    <>
                        <Route path={`${url}/new`} component={NewImmo} />
                        <Route path={`${url}/update/:id`} component={NewImmo} />
                    </>
                )}
                />
            </Switch>

        </>

    );
}

export default AdminPannel;
