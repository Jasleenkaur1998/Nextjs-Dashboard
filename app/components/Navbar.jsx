import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className={styles.navbarContainer}>
          <li>
            <Link href="/">
              <img className={styles.logo} src="./logo.png" alt="" />
            </Link>
          </li>
          <li className={styles.loginLink}>
            <Link href="dashboard">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
