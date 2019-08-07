import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withAuthentication } from "../Session";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import SomeComponent from "../SomeComponents";

import * as ROUTES from "../constants/routes";

/* 
Bu alanda yapıalcak her değişiklik için alttaki alanlar değişmeli:
- "../constant/routes"
- "../Navigation" 
*/

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.SOME_COMPONENT} component={SomeComponent} />
    </div>
  </Router>
);

// Oturum bilgisine erişimli App verisini döndürmemiz lazım, çünkü oturum işlemlerini kullanıyor
export default withAuthentication(App);
