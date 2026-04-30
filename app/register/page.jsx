"use client";
import { registerUser } from "@/app/authService";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Intentando registrar con:", email, password);
    const result = await registerUser(email, password);
    if (!result.success) {
      if (result.error.code === "auth/email-already-in-use") {
        return alert("El correo ya está registrado ❌");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Register</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
