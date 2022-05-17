import styles from './Country.module.css'


export default function Country({id, name, flags, region, subregion, area, population}){
    return <div className={styles.Card}>
        <img className={styles.Image} src={flags} alt="imagen"  />
        <h2>{name}</h2>
        <h3>{region}</h3>
    </div>
}