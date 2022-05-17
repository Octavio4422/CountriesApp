import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar () {
    return <div className={styles.Hole} >
        <Link to={'/'}  ><h1>Countries APP</h1></Link>
        <Link to={'/activity'} >Create activity</Link>
    </div>
}