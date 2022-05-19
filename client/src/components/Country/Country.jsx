import styles from './Country.module.css'
import { Link } from 'react-router-dom';


export default function Country({id, name, flags, region, subregion, area, population}){
    return <div className={styles.Card}>
        <h2>{name}</h2>
        <img className={styles.Image} src={flags} alt="imagen"  />
        <h4 className={styles.Continent} >{region}</h4>
        <Link to={`/${id}`} ><button>Click for Details</button> </Link>
    </div>
}