import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Use signInWithPopup for signing in
      const userCred = await signInWithPopup(auth, provider);
      console.log('User credentials from popup:', userCred);
    } catch (error) {
      console.error('Error during sign-in with popup:', error);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser);
    });

    // Handle the result if you are using redirect in other scenarios
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          alert('User credentials from redirect:', result);
        }
      } catch (error) {
        alert('Error during redirect sign-in:', error);
      }
    };
    handleRedirectResult();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
