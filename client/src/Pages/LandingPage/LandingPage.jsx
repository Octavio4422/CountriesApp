import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"


export default function LandingPage(){
    return(
        <div className={styles.Landing}>
            <Link to='/home' ><button>Get´s Started</button>  </Link>
        </div>
    )
}