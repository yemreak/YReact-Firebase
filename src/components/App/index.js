import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "../Firebase";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTES from "../constants/routes";
import SomeComponent from "../SomeComponents";

/* 
Bu alanda yapıalcak her değişiklik için alttaki alanlar değişmeli:
- "../constant/routes"
- "../Navigation" 
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    // Giriş yapıldı mı kontorlünü yapan dinleyici tanımalma
    // !WARN: Listener component unmount olduğunda kaldırlmazsa performans kaybına neden olur.
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    // Performans kaybını engellemek için listenerı kapatıyoruz
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
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
  }
}

// Firebase'e erişimli App verisini döndürmemiz lazım, çünkü Firebase'i kullanıyor
export default withFirebase(App);
