import React from "react";

import { compose } from "recompose";

import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";

import AuthUserContext from "./context";

import * as ROUTES from "../constants/routes";

// !TIP: Koşullu yönlendirme yapısı

/**
 * Koşullu olarak `SIGN_IN` sayfasına yönlendirme
 * - Herkese gösterilmeyen sayfaların yönetimi için kullanılır
 * - Verilen component'e firebase erişimi verir
 * @param {function} condition Koşul fonksiyonu (true ise `Component` aksi halde `null`)
 */
const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(ROUTES.SIGN_IN);
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        // Yönlendirme yapılmadan sayfanın gözükmesini engelleme
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase
  )(WithAuthorization);
};

export default withAuthorization;
