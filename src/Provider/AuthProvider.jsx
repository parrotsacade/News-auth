import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const handleLoginGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

 const handleLogOut=()=>{
   return signOut(auth)
 }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    });
    return () => unSubscribe();
  }, [auth]);

  const authInfo = {
    handleLoginGoogle,
    user,
    handleLogOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
