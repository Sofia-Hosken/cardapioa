import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>🍔Lanches da Vó Ausiria</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/PagePizza">Pizza</Link>
        <Link to="/PageHamburguer">Hamburguer</Link>
        <Link to="/PageRefrau">Bebidas</Link>
      </nav>
    </header>
  );
}

export default Header;
