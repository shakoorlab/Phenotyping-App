// This file contains the login logic for Firebase

import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const login = async (email, password) => {
  const auth = FIREBASE_AUTH;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
