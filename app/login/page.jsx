import "./login.css";
import Image from "next/image";

function Login() {
  return (
    <div className="login-container">
      <div className="back-container">
        <a href="/" className="back-btn">
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
        </a>
      </div>

      <div className="login-card">
        <h2>Login</h2>
        <h3>Ingresa tus credenciales</h3>
        <form className="login-form">
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Password" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
