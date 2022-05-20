import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounties } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Finders from "../../components/Finders/Finders/Finders";
import Countries from "../../components/Countries/Countries";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  let dispatch = useDispatch();
  let countries = useSelector((state) => state.filterCountries);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    dispatch(getCounties());
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indecOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = countries.slice(indecOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    if (pageNumber != 1) {
      setCardsPerPage(10);
    } else {
      setCardsPerPage(9);
    }
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <NavBar />
        <Finders />
        <Countries countries={currentCard} />
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={countries.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
