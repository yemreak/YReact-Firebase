# Hızlı Notlar

## Const ve Class Seçimi

- Sadece veri `return` ediliyorsa `const` seçilir.
  - `{}` yerine `()` kullanılır

```jsx
const App = () => (
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
```

## React Context API

En üst bileşenlerden en alt bileşenlere veri (`state`) göndermek için her bir bileşenden verinin aktarılması lazım, bu yapı sayesinde veriler direkt olarak aktarılabilmekte

- Provider
- Consumer

### Basit anlamda RCA

```jsx
// src/componnet/<name>/context.js
import React from "react";

const AuthUserContext = React.createContext(null);

export default AuthUserContext;
```

```jsx
// src/componnet/<name>/index.js
import AuthUserContext from "./context";

export { AuthUserContext };
```

```jsx
// src/component/App.js
...

render() {
    <AuthUserContext.Provider value={this.state.authUser}>
        <div>
        ...
        </div>
    </AuthUserContext.Provider>
}
```

```jsx
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);
```

### Firebase için RCA

```jsx
import React from "react";

const FirebaseContext = React.createContext(null);

// Firebase ile component kullanımı

/**
 * Firebase props'una erişim hakkı ile componenti çağırma
 * @param {React.Component} Component Firebase erişimi verilecek React Componenti
 */
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
```

```jsx
import FirebaseContext, { withFirebase } from "./context";
import Firebase from "./firebase";

export default Firebase;

export { FirebaseContext, withFirebase };
```

### Firebase Database Notları

- In Firebase, the RESTful URI becomes a simple path, and the HTTP methods become Firebase’s API.
- [Firebase tutorial](https://www.robinwieruch.de/firebase-tutorial/)
- [Firebase hangi database seçmeliyim?](https://firebase.google.com/docs/database/rtdb-vs-firestore)
- [Firebase fiyatlandırması](https://firebase.google.com/pricing)

### Firebase Hosting

- [Firebase hosting'i iptal etme](https://stackoverflow.com/a/44584220)
