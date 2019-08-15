import React from "react";

const FirebaseContext = React.createContext(null);

// TIP: Firebase ile component kullanımı

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
