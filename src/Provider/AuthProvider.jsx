import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/Context";
import { auth } from "../firebase/firebase.init";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // sign in
  const handleSignInEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // creating new users
  const creatingUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // observer
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser(userInfo);
      }
      // stop loading
      setLoading(false);
    });

    // cleanup function
    return () => unSubscribed();
  }, []);

  // sign in using google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign in using github

  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // user sign out

  const userSignOut = () => {
    return signOut(auth);
  };
  const authData = {
    user,
    handleSignInEmailAndPassword,
    creatingUser,
    userSignOut,
    setUser,
    loading,
    signInWithGoogle,
    signInWithGithub,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
