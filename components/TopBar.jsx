import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Topbar.module.css";
import { useAuth } from "../firebase/UserAuthContext";
import { useRouter } from "next/router";

export default function TopBar() {
  const auth = useAuth();
  const router = useRouter();

  return (
    <div className={styles.top}>
      <div className={styles.topLeft}>
        <span>Forest</span>
      </div>
      <div className={styles.topCenter}>
        {auth.user && (
          <ul className={styles.topList}>
            <li className={styles.topListItem}>
              <Link className={styles.link} href="/">
                HOME
              </Link>
            </li>
            <li className={styles.topListItem}>
              <Link className={styles.link} href="/information">
                NATIONAL PARKS and SEARCH
              </Link>
            </li>
            <li className={styles.topListItem}>
              <Link className={styles.link} href="#">
                WILD LIFE
              </Link>
            </li>
            {/* <li className={styles.topListItem}>
            <Link className={styles.link} href="#">
              GALLERY
            </Link>
          </li> */}
          </ul>
        )}
      </div>
      <div className={styles.topRight}>
        <ul className={styles.topList}>
          {auth.user ? (
            <li
              className={styles.topListItem}
              onClick={() => {
                auth.logOut();
                router.push("/");
              }}
            >
              LOGOUT
            </li>
          ) : (
            <>
              <li className={styles.topListItem}>
                <Link className={styles.link} href="signIn">
                  LOGIN
                </Link>
              </li>
              <li className={styles.topListItem}>
                <Link className={styles.link} href="signUp">
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
