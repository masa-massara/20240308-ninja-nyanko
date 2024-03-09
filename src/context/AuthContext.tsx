import  { FC, ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../context/firebase";
import { onAuthStateChanged } from "firebase/auth";

export type ContextType = string;
export const AuthContext = createContext<{ currentUser: unknown }|null>(null);

export const AuthContextProvider:FC<{children:ReactNode}>= ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user!);
      console.log(user)
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};