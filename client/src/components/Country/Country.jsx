import styles from "./Country.module.css";
import { Link } from "react-router-dom";
import areaParser from "../../Functions/areaParser";
import populationParser from "../../Functions/populationParser";

export default function Country({id,
  name,
  flags,
  region,
  subregion,
  area,
  population,
  Activities,
}) {

  return (
    <div className={styles.Card}>
      <h2>{name}</h2>
      <img className={styles.Image} src={flags} alt="imagen" />
      <h4 className={styles.Continent}>{region}</h4>
      {!subregion ? (<Link to={`/countries/${id}`}><button>Click for Details</button>{" "}</Link>) : (<h4>{subregion}</h4>)}
      {area && <h4>{areaParser(area)}</h4>}
      {population && <h4>{populationParser(population)}</h4>}
      {Activities && <h4>Activities:{Activities.map((a) => <h4>{a.name}({a.season})</h4>)}</h4>}
    </div>
  );
}
