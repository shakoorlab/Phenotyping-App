import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { login as loginService } from "../services/authService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const user = await loginService(email, password);
      login(user); // Set user in context
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
