import Link from "next/link";
import "./header.css";

function Header() {
  return (
    <header>
      <p>Prueba</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page01">Pagina 01</Link>
        </li>
        <li>
          <Link href="/page02">Pagina 02</Link>
        </li>
        <li>
          <Link href="/page03">Pagina 03</Link>
        </li>
      </ul>

      <a href="/login">
        <button>Login</button>
      </a>
    </header>
  );
}

export default Header;
