import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //   Register
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessages;

      if (error.message.includes("Password")) {
        systemErrorMessages = "A senha deve ter no minimo 6 caracteres";
      } else if (error.message.includes("email-alredy")) {
        systemErrorMessages = "Email ja cadastrado";
      } else {
        systemErrorMessages = "Ocorreu um erro, por favor tente mais tarde";
      }

      setLoading(false);
      setError(systemErrorMessages);
    }
  };

  // Logout
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // Login
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessages;
      if (error.message.includes("user-not-found")) {
        systemErrorMessages = "Usuario não encontrado";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessages = "Senha Incorreta";
      } else {
        systemErrorMessages = "Ocorreu um erro, por favor tente mais tarde";
      }

      setError(systemErrorMessages);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
