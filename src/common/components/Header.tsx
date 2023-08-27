import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [closed, setClosed] = useState(true);
  return (
    <motion.div className={styles.nav + " m-2"}>
      <Link
        href="/"
        aria-current="page"
        className="min-w-[50px] max-w-[170px] w-[25%] absolute left-0 top-0"
      >
        <Image
          src="/img/Licet.png"
          loading="eager"
          alt="diagram logo"
          width={500}
          height={0}
        />
      </Link>
      <div className={styles.navList + " mt-2"}>
        <a href="#" className={styles.navItem}>
          Home
        </a>
        <Link href="/events" className={styles.navItem}>
          Events
        </Link>
        <a href="#" className={styles.navItem}>
          Contact us
        </a>
        <a href="#" className={styles.navItem}>
          FAQ
        </a>
      </div>
      <div className={styles.navButtons + " absolute right-4 top-1"}>
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
    </motion.div>
  );
}
