import React from 'react'
import './App.css'
import {BrowserRouter as Router , Route, Switch, Link, Redirect} from "react-router-dom";

import Accueil from "./components/front-pages/pages/accueil/Accueil";
import Acheter from "./components/front-pages/pages/acheter/Acheter";
import Louer from "./components/front-pages/pages/louer/Louer";
import AboutUs from "./components/front-pages/pages/about-us/About-us";
import Articles from "./components/front-pages/pages/articles/Articles";
import DetailsImmo from "./components/front-pages/pages/details-immo/Details-immo";
import Header from "./components/front-pages/structure/header/Header";
import Footer from "./components/front-pages/structure/footer/Footer";
import PopUpContact from "./components/front-pages/modules/pop-up-contact/Pop-up-contact";
import WhyUs from "./components/front-pages/modules/why-us/Why-us";
import ItemArticle from "./components/front-pages/pages/articles/item-article/Item-article";
import Error404 from "./error404";

function App(props:any) {
  return (
      <Router>
          <Switch>

              <Route path="/admin" render={({ match: { url } }) => (
                  <>
                      <Route path={`${url}/`} component={WhyUs} exact />
                      <Route path={`${url}/articles`} component={Articles} />
                      <Route path={`${url}/details`} component={DetailsImmo} />
                  </>
              )}
              />

              <Redirect exact from="/" to={`/accueil`}  />
              <Route path="/" render={({ match: { url } }) => (
                  <>
                      <Header/>

                      <Switch>
                          <Route path='/accueil' component={Accueil} />
                          <Route path='/aPropos' component={AboutUs} />
                          <Route path="/articles" render={({ match: { url } }) => (
                              <>
                                  <Route path={`${url}`} exact component={Articles} />
                                  <Route path={`${url}/details/:id`} component={ItemArticle} />
                              </>
                          )}
                          />
                          <Route path="/immobilier" render={({ match: { url } }) => (
                              <>
                                  <Route path={`${url}/acheter`} component={Acheter} exact />
                                  <Route path={`${url}/louer`} component={Louer} />
                                  <Route path={`${url}/:idtype/details/:id`} component={DetailsImmo} />
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

      </Router>

  );
}

export default App;
