import { useDispatch } from "react-redux";
import { orderSeason } from "../../../redux/actions";

export default function OrderSeason(){
    const dispatch = useDispatch();
  
    function onSelect(e) {
      dispatch(orderSeason(e.target.value));
    }
    return (
      <div>
        <select name="select" onChange={onSelect}>
          <option value="" selected >Select a Season</option>
          <option value="ALL">Countries With Activities</option>
          <option value="SUMMER">Summer</option>
          <option value="AUTUMN">Autumn</option>
          <option value="WINTER">Winter</option>
          <option value="SPRING">Spring</option>
        </select>
      </div>
    );
}