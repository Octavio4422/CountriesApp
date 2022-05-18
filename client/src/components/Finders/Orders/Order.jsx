import { useDispatch } from "react-redux";
import { order } from "../../../redux/actions";

export default function Order() {
  const dispatch = useDispatch();

  function onSelect(e){
    dispatch(order(e.target.value))
  }
  
  return (
    <div>
      <select name="select" onChange={onSelect}>
        <option value="DEFAULT">Default</option>
        <option value="ASCENDENTE">A to Z</option>
        <option value="DESCENDENTE">Z to A</option>
        <option value="POPULATIONMX">Population MAX</option>
        <option value="PUPULATIONMN">Population MIN</option>
      </select>
    </div>
  );
}
