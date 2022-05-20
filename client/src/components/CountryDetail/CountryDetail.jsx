import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { emptyCountry, getCountry } from "../../redux/actions";
import Country from "../Country/Country";
import NavBar from "../NavBar/NavBar";
import styles from "./CountryDetail.module.css"

export default function CountyDetail() {
  const { id } = useParams();
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(id));
    return function cleanUp() {
      dispatch(emptyCountry());
    };
  }, []);

  console.log(country)

  return (
    <div>
      <NavBar />
      <div className={styles.Cdetail} >
        <Country
          id={country.id}
          name={country.name}
          flags={country.flags}
          region={country.region}
          capital={country.capital}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
          activities={country.Activities}
        />
      </div>
    </div>
  );
}
