import Link from "next/link";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="left">Prueba</div>

      <nav className="center">
        <Link href="/">Home</Link>
        <Link href="/page01">Pagina 01</Link>
        <Link href="/page02">Pagina 02</Link>
        <Link href="/page03">Pagina 03</Link>
      </nav>

      <div className="right">
        <a href="/login">
          <button>Login</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
