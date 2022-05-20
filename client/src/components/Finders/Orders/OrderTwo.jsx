import { useDispatch } from "react-redux";
import { orderWReset } from "../../../redux/actions";

export default function OrderTwo() {
  const dispatch = useDispatch();
  
  function onSelect(e) {
    dispatch(orderWReset(e.target.value));
  }
  return (
    <div>
      <select name="select" onChange={onSelect}>
        <option value="DEFAULT" selected >All Continents</option>
        <option value="AMERICAS">Americas</option>
        <option value="ANTARCTIC">Antarctic</option>
        <option value="OCEANIA">Oceania</option>
        <option value="ASIA">Asia</option>
        <option value="AFRICA">Africa</option>
        <option value="EUROPE">Europe</option>
      </select>
    </div>
  );
}
