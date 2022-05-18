import styles from './Country.module.css'


export default function Country({id, name, flags, region, subregion, area, population}){
    return <div className={styles.Card}>
        <h2>{name}</h2>
        <img className={styles.Image} src={flags} alt="imagen"  />
        <h4 className={styles.Continent} >{region}</h4>
        
    </div>
}