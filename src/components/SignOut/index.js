import React from "react";
import { withFirebase } from "../Firebase";

// !TODO: Oturum kapatıldığında da yönlendirme olacak
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
