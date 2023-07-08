import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { signInWithRedirect,GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Welcome = () => {

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
  };

  const githubSignIn =()=>{
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth,provider)
  } ;

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
        <img
          onClick={githubSignIn}
          src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-700x394.png'
          alt="sign in with google"
          type="button"
        />
        
      </button>
    </main>
  );
};

export default Welcome;