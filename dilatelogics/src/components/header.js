import React from "react";
import styles from "./header.module.css";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbarContainer}>
          <nav className={styles.navbar}>
            <div className={styles.websiteName}>
              <h1>Dilate Solutions</h1>
            </div>
            <div className={styles.navlinks}>
              <ul>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Consultancy</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Insights</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={styles.flagContainer}>
              <div className={styles.outerCircle}>
                <div className={styles.innerCircle}>
                  <img src="./pakflag.png" alt="Country Flag" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
