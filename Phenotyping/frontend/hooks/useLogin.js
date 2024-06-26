import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      // Authenticate the user with Firebase
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const { uid, email: userEmail, displayName } = userCredential.user;

      // Make a request to the backend to log in the user and get additional data
      const response = await axios.post(
        "http://localhost:3000/api/activeusers/signin",
        {
          uid,
          email: userEmail,
          displayName,
        }
      );

      // Extract user data from the response, including imageUrl
      const user = response.data.activeUser;

      // Set the user in the context with the full user data
      login(user);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/invalid-credential") {
        alert("Incorrect Password");
      } else {
        alert(error.message);
      }
    }
  };

  return { handleLogin, loading };
};
