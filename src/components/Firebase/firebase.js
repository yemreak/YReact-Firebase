import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TIP: Firebase yapılandırması
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    // Firebase kimlik kontrolü ve database objesi
    this.auth = app.auth();
    this.database = app.database();
  }

  // TIP: Firebase güvenilirlik işlemleri
  // Daha fazlası için: https://firebase.google.com/docs/auth/web/start

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // TIP: Firebase kullanıcı işlemleri (user API)
  // In Firebase, the RESTful URI becomes a simple path, and the HTTP methods become Firebase’s API.
  user = uid => this.database.ref(`users/${uid}`);
  users = () => this.database.ref(`users`);
}

export default Firebase;
