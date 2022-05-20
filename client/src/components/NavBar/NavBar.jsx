import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.Hole}>
      <Link to={"/home"} className={styles.Home}>
        <h1>Countries APP</h1>
      </Link>
      <Link to={"/activity"} className={styles.Activity}>
        <h4>Create activity</h4>
      </Link>
    </div>
  );
}
