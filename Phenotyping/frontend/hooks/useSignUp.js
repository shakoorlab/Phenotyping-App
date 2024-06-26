// useSignUp encapsulates the logic for signing up a user, including creating a user in Firebase and updating their profile with a display name.
//It manages the loading state and any errors that occur during the sign-up process.

import { useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (email, password, displayName) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  return { signUp, loading, error };
};

export default useSignUp;
