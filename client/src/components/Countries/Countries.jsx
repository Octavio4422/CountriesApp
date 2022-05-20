import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounties } from "../../redux/actions";
import Country from "../Country/Country";
import styles from "./Countries.module.css";

export default function Countries() {
  let countries = useSelector((state) => state.filterCountries);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCounties());
  }, []);

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
