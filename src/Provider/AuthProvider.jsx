import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/Context";
import { auth } from "../firebase/firebase.init";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
    });
    return () => unSubscribed();
  }, []);

  console.log(user);
  const authData = { user, handleSignInEmailAndPassword, creatingUser };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
