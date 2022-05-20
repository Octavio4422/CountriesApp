import Country from "../Country/Country";
import styles from "./Countries.module.css";

export default function Countries({ countries }) {
  return (
    <ul className={styles.Cards}>
      {countries &&
        countries.map((c) => {
          return (
            <Country
              key={c.id}
              id={c.id}
              name={c.name}
              flags={c.flags}
              region={c.region}
            />
          );
        })}
    </ul>
  );
}
