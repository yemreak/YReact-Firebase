import React from "react";

const FirebaseContext = React.createContext(null);

// !TIP: Firebase ile component kullanımı
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
