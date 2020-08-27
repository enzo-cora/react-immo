import React, {FunctionComponent, lazy, Suspense} from 'react'
import {BrowserRouter as RouterHtml , Route, Switch, Redirect} from "react-router-dom";

import Accueil from "./components/front-pages/pages/accueil/Accueil";
import Acheter from "./components/front-pages/pages/acheter/Acheter";
import Louer from "./components/front-pages/pages/louer/Louer";
import AboutUs from "./components/front-pages/pages/about-us/About-us";
import Articles from "./components/front-pages/pages/articles/Articles";
import DetailsImmo from "./components/front-pages/pages/details-immo/Details-immo";
import Header from "./components/front-pages/structure/header/Header";
import Footer from "./components/front-pages/structure/footer/Footer";
import ItemArticle from "./components/front-pages/pages/articles/item-article/Item-article";
import Error404 from "./components/error404";
import Login from "./components/front-pages/auth/login/Login";
import Register from "./components/front-pages/auth/register/Register";
import Profile from "./components/front-pages/auth/profile/Profile";
import {connect} from "react-redux";
import PopUpContact from "./components/front-pages/modules/pop-up-contact/Pop-up-contact";
import GuardRoute from "./components/front-pages/auth/guardRoute/GuardRoute";
import {getIsAdmin} from "./selectors/auth-selector";

const AdminPannel = lazy(()=> import("./components/admin-pages/admin-pannel/Admin-pannel"))

type state = {
    error? : {
            title : string,
            message : string
    } | any,
    isAuth? : boolean
    isAdmin? : boolean
}

const Router : FunctionComponent<state> = ({error,isAuth,isAdmin}) => {
  return (
      <>
          {error.response && <div style={{background : "orangered"}}>
              <h3>Une erreur est survenue :</h3>
              <h4>{error.response.title}</h4>
              <p>{error.response.message}</p>
          </div>}
          <RouterHtml>
              <Switch>

                  <Route path="/admin"  render={() => (
                      //Lazy loading
                      <Suspense fallback={<div>Chargement...</div>}>
                          <GuardRoute guard={isAuth && isAdmin}  component={AdminPannel}/>
                      </Suspense>
                  )}
                  />
                  <Redirect exact from="/" to={`/accueil`}  />
                  <Route path="/" render={() => (
                      <>
                          <Header/>

                          <Switch>
                              <Route path='/accueil' component={Accueil} />
                              <Route path='/aPropos' component={AboutUs} />
                              <Route path='/contact' component={PopUpContact} />
                              <Route path="/articles" render={({ match: { url } }) => (
                                  <>
                                      <Route path={`${url}`} exact component={Articles} />
                                      <Route path={`${url}/details/:id`} component={ItemArticle} />
                                  </>
                              )}
                              />
                              <Route path="/auth" render={({ match: { url } }) => (
                                  <>
                                      <GuardRoute path={`${url}/connexion`} guard={!isAuth} component={Login} />
                                      <GuardRoute path={`${url}/inscription`} guard={!isAuth} component={Register} />
                                      <GuardRoute path={`${url}/compte`} guard={isAuth} component={Profile} />
                                  </>
                              )}
                              />
                              <Route path="/immobilier" render={({ match: { url } }) => (
                                  <>
                                      <Route path={`${url}/acheter`}  component={Acheter} />
                                      <Route path={`${url}/louer`} component={Louer} />
                                      <Route path={`${url}/:status/details/:id`} component={DetailsImmo} />
                                  </>
                              )}
                              />
                              <Route component={Error404} />
                          </Switch>

                          <Footer/>
                      </>
                  )}
                  />

              </Switch>
          </RouterHtml>
      </>

  );
}

//-------------------Container -------------------------
const mapStateToProps = state => ({
    error : state.error,
    isAuth : state.auth.isAuth,
    isAdmin : getIsAdmin(state)
})

export default connect(
    mapStateToProps,
    null
)(Router)



