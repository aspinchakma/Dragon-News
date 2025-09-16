import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
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

    // cleanup function
    return () => unSubscribed();
  }, []);

  // user sign out

  const userSignOut = () => {
    return signOut(auth);
  };
  console.log(user);
  const authData = {
    user,
    handleSignInEmailAndPassword,
    creatingUser,
    userSignOut,
    setUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
