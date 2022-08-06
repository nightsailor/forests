import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Topbar.module.css";

export default function TopBar() {
  const [user,setUser] = useState(true);

  return (
    <div className={styles.top}>
      <div className={styles.topLeft}>
        <span>JUNGLE</span>
      </div>
      <div className={styles.topCenter}>
        {user &&
        (<ul className={styles.topList}>
          <li className={styles.topListItem}>
            <Link className={styles.link} href="/">
              HOME
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className={styles.link} href="#">
              FOREST
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className={styles.link} href="#">
              WILD LIFE
            </Link>
          </li>
          <li className={styles.topListItem}>
            <Link className={styles.link} href="#">
              GALLERY
            </Link>
          </li>
        </ul>)}
      </div>
      <div className={styles.topRight}>
        <ul className={styles.topList}>
        {user ? (
          <li className={styles.topListItem}>
            LOGOUT
          </li>
        ) : (
          <>
            <li className={styles.topListItem}>
              <Link className={styles.link} href="#">
                LOGIN
              </Link>
            </li>
            <li className={styles.topListItem}>
              <Link className={styles.link} href="#">
                REGISTER
              </Link>
            </li>
          </>
        )}
        </ul>
      </div>
    </div>
  );
}