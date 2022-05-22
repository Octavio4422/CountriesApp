import { useDispatch } from "react-redux";
import { defaultValues } from "../../redux/actions";

import SearchBar from "./SearchBar/SearchBar";
import Order from "./Orders/Order";
import OrderContinents from "./Orders/OrderContinents";
import OrderSeason from "./Orders/OrderSeason";
import styles from "./Finders.module.css";

export default function Finders() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(defaultValues());
  };

  return (
    <div className={styles.Hole} >
      <SearchBar />
      <button onClick={handleClick}>Default Values</button>
      <div className={styles.Orders}>
        <Order />
        <OrderContinents />
        <OrderSeason />
      </div>
    </div>
  );
}
