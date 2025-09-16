import { useState } from "react";
import { AuthContext } from "../Contexts/Context";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Aspin Chakma" });
  const authData = { user };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
