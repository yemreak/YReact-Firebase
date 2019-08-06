/* The createContext() function essentially creates two components. The FirebaseContext.Provider component is used to provide a Firebase instance once at the top-level of your React component tree, which we will do in this section; and the FirebaseContext.Consumer component is used to retrieve the Firebase instance if it is needed in the React component. For a well-encapsulated Firebase module, we’ll define a index.js file in our Firebase folder that exports all necessary functionalities (Firebase class, Firebase context for Consumer and Provider components): */

import FirebaseContext from "./context";
import Firebase from "./firebase";

export default Firebase;

export { FirebaseContext };
