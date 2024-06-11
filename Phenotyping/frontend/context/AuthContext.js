//----------TO SHARE AUTHENTICATION STATE ACROSS COMPONENTS------

import React, { createContext, useState, useContext } from "react";
//creates a new Context object named AuthContext.
//This object will be used to share authentication state throughout the app
const AuthContext = createContext();

//Defining a React component called AuthProvider. This component will wrap parts of your app where you want to provide access to the authentication state.
//children: A prop that represents the child components that AuthProvider will wrap.
//   user: A state variable that holds the current user object. It's initialized to null, meaning no user is logged in by default.
//   setUser: A function to update the user state variable.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //When called, it updates the user state with the provided userData.
  //This function will be used to set the user information when they log in.
  const login = (userData) => {
    setUser(userData);
  };

  //This function will be used to clear the user information when they log out.
  const logout = () => {
    setUser(null);
  };

  //allows consuming components to subscribe to context changes.
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//Defining and exporting a custom hook called useAuth.
//useContext(AuthContext): This hook allows components to access the AuthContext values
//                        (i.e., user, login, and logout) without needing to use the Consumer component.
//                         It makes it more convenient to access context values.
export const useAuth = () => {
  return useContext(AuthContext);
};
