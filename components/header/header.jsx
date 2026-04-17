"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./header.css";

function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="left">
        <div className="nexora">Nexora</div>
        <div className="point-nexora">.</div>
      </div>

      <nav className="center">
        <Link href="/">Inicio</Link>
        <Link href="/page01">Explorar</Link>
        <Link href="/page02">Mensajes</Link>
        <Link href="/page03">Perfil</Link>
      </nav>

      <div className="header-separator"></div>

      <div className="right">
        <button className="login-btn" onClick={() => router.push("/login")}>
          Ingresar
        </button>
        <button
          className="register-btn"
          onClick={() => router.push("/register")}
        >
          Registrarse
        </button>
      </div>
    </header>
  );
}

export default Header;
