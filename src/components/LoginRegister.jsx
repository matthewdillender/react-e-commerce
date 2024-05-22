import React, { useState } from "react";
import axios from "axios";

export function LoginRegisterModal({ showModal, closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      // Implement your login logic with Axios
      const response = await axios.post("/login", { email, password });
      console.log("Login successful:", response.data);
      closeModal();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleRegister = async () => {
    try {
      // Implement your register logic with Axios
      const response = await axios.post("/register", { email, password });
      console.log("Registration successful:", response.data);
      closeModal();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Login or Register</h2>
        {error && <div className="error">{error}</div>}
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
