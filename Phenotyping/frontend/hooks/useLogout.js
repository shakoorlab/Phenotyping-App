import { useState } from "react";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { FIREBASE_AUTH } from "../FirebaseConfig";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const user = FIREBASE_AUTH.currentUser;

      if (user) {
        await axios.post("http://localhost:3000/api/activeusers/signout", {
          uid: user.uid,
        });

        await signOut(FIREBASE_AUTH);
        logout(); // Clear user in context
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return { handleLogout, loading };
};
