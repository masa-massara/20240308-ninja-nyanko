import  { FC, ReactNode, createContext, useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

export type ContextType = string;
export const AuthContext = createContext<User|null>(null);

export const AuthContextProvider:FC<{children:ReactNode}>= ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User|null>(null);

  useEffect(() => {
    const auth = getAuth()
    const user = auth.currentUser
    setCurrentUser(user);
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user)
    });

    return () => {
      unsub();
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};
