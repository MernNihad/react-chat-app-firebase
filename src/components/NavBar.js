import React, { useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  // googleSignIn
  const googleSignIn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
  };
  // ----------------------------


  // githubSignIn
  const githubSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  };
  // ----------------


  // signOut
  const signOut = () => {
    auth.signOut()
  };
  // ---------------

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />

          <img
            onClick={githubSignIn}
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-700x394.png"
            alt="sign in with github"
            type="button"
          />
          
        </button>
      )}
    </nav>
  );
};

export default NavBar;