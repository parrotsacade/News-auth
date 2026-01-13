import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLoginGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleLoginGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const handleRegisterWithEmailAndPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLoginWithEmailAndPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };



  const handleLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unSubscribe();
  }, [auth]);

  const authInfo = {
    handleLoginGoogle,
    user,
    handleLogOut,
    handleRegisterWithEmailAndPassword,
    loading,
    handleLoginWithEmailAndPassword,
    handleLoginGithub
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
