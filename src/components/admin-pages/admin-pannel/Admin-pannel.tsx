import React from 'react';
import css from './admin-pannel.module.css'
import {Link, Route,Switch} from 'react-router-dom'
import NewImmo from "../new-immo/New-immo";
import NewArticle from "../new-article/NewArticle";
import AllArticles from "../allArticles/AllArticles";

const AdminPannel = ()=> {
    let url  ='/admin'
    return (
        <>
            <header className={css.menuAdmin} >
                <h3>Admin</h3>
                <Link to='/'><button>Retour</button></Link>


                <ul className={css.ulAdmin}>
                    <h4>Ajouter :</h4>
                    <li><Link to='/admin/immo/new'><button>immo</button></Link></li>
                    <li><Link to='/admin/article/new'><button>Articles</button></Link></li>
                </ul>

                <ul className={css.ulAdmin}>
                    <h4>Voir tous :</h4>
                    <li><Link to='/admin/immo/all'><button>immo</button></Link></li>
                    <li><Link to='/admin/article/all'><button>Articles</button></Link></li>
                    <li><Link to='/admin/users/all'><button>utilisateurs</button></Link></li>
                </ul>



                <ul className={css.ulAdmin}>
                    <h4>Modifier :</h4>
                    <li><Link to='/aPropos'><button>Agence</button></Link></li>
                </ul>
            </header>

            <Switch>
                <Route path={`${url}/immo`} render={({ match: { url } }) => (
                    <>
                        <Route path={`${url}/new`} component={NewImmo} />
                        <Route path={`${url}/all`} component={NewImmo} />
                        <Route path={`${url}/update/:id`} component={NewImmo} />
                    </>
                )}
                />
                <Route path={`${url}/article`} render={({ match: { url } }) => (
                    <>
                        <Route path={`${url}/new`} component={NewArticle} />
                        <Route path={`${url}/all`} component={AllArticles} />
                        <Route path={`${url}/update/:id`} component={NewArticle} />
                    </>
                )}
                />
                <Route path={`${url}/users`} render={({ match: { url } }) => (
                    <>
                        <Route path={`${url}/new`} component={NewArticle} />
                        <Route path={`${url}/all`} component={NewArticle} />
                        <Route path={`${url}/update/:id`} component={NewArticle} />
                    </>
                )}
                />
            </Switch>

        </>

    );
}

export default AdminPannel;
