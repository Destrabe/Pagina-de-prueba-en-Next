"use client";

import "./login.css";
import Image from "next/image";
import { useState } from "react";
//import { useRouter } from "next/navigation";
import { loginUser } from "@/app/authService";
import Link from "next/link";

function Login() {
  //const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(email, password);

      console.log("Usuario:", user);

      alert("Login exitoso ✅");

      //router.push("/");
    } catch (error) {
      alert("Credenciales incorrectas ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="back-container">
        <Link href="/" className="back-btn">
          <div className="btn-green">
            <Image
              src="/arrow-left.svg"
              alt="Volver"
              width={24}
              height={24}
              className="arrow-left"
              priority
            />
          </div>
          <span className="text">Volver</span>
        </Link>
      </div>

      <div className="login-card">
        <h2>Login</h2>
        <h3>Ingresa tus credenciales</h3>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
