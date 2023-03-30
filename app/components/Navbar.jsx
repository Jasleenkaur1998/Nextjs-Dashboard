"use client";

import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const slug = usePathname();
  const loggedIn = slug === "/dashboard" ? true : false;

  return (
    <header>
      <nav>
        <ul className={styles.navbarContainer}>
          <li>
            <Link href="/">
              <img className={styles.logo} src="./logo.png" alt="Logo" />
            </Link>
          </li>
          <li>
            {!loggedIn ? (
              <Link className={styles.loginLink} href="dashboard">
                Login
              </Link>
            ) : (
              <Link className={styles.loginLink} href="/">
                Logout
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
