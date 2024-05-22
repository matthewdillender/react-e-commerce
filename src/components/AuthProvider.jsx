import React, { createContext, useState } from "react";
import axios from "axios";

// Create a context for managing authentication state
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to store authentication status
  const [user, setUser] = useState(null);
  // State to store error messages
  const [error, setError] = useState(null);

  // Function to handle user login
  const login = async (username, password) => {
    try {
      console.log("Attempting login...");
      const response = await axios.post("http://localhost:3000/sessions", { username, password });
      console.log("Login successful:", response.data);
      const userData = response.data;
      setUser(userData);
      setError(null);
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username or password.");
    }
  };

  // Function to handle user registration
  const register = async (username, password) => {
    try {
      console.log("Attempting registration...");
      const response = await axios.post("http://localhost:3000/users", { user: { username, password } });
      console.log("Registration successful:", response.data);
      const userData = response.data;
      setUser(userData);
      setError(null);
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again later.");
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      console.log("Logging out...");
      await axios.delete("http://localhost:3000/sessions");
      console.log("Logout successful");
      setUser(null);
      setError(null);
    } catch (error) {
      console.error("Logout error:", error);
      setError("Logout failed. Please try again later.");
    }
  };

  return <AuthContext.Provider value={{ user, error, login, register, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
