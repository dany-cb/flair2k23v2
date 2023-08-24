import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [closed, setClosed] = useState(true);
  return (
    <div className={styles.nav}>
      <Link
        href="/"
        aria-current="page"
        className="logo-link w-inline-block w--current"
      >
        <Image
          src="https://placehold.co/100x50"
          loading="eager"
          alt="diagram logo"
          width={100}
          height={50}
        />
      </Link>
      <div className={styles.navList}>
        <a href="#" className={styles.navItem}>
          Home
        </a>
        <a href="#" className={styles.navItem}>
          Events
        </a>
        <a href="#" className={styles.navItem}>
          Contact us
        </a>
        <a href="#" className={styles.navItem}>
          FAQ
        </a>
      </div>
      <div className={styles.navButtons}>
        <div
          onClick={() => setClosed((cur) => !cur)}
          className={`${styles["header-toggle"]} ${
            !closed ? styles["header-toggle-active"] : ""
          }`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul
        className={`${styles["header-nav"]} ${closed ? styles["hidden"] : ""}`}
      >
        <li>
          <a className={styles["header-nav-link"]}>Home</a>
        </li>
        <li>
          <a className={styles["header-nav-link"]}>Events</a>
        </li>
        <li>
          <a className={styles["header-nav-link"]}>Contact us</a>
        </li>
        <li>
          <a className={styles["header-nav-link"]}>FAQ</a>
        </li>
      </ul>
    </div>
  );
}
