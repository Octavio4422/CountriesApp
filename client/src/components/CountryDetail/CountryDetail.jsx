import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { emptyCountry, getCountry } from "../../redux/actions";


export default function CountyDetail(){
    const { id } = useParams();
    const country = useSelector((state) => state.country);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getCountry(id))
        return function cleanUp(){
            dispatch(emptyCountry())
        }
    },[])
    console.log(country);


    return(
        <div>
            <h1>{country.name}</h1>
            <h2>{country.id} </h2>
            <img src={country.flags} alt='img' />
            <h2>{country.region}</h2>
            <h2>{country.subregion}</h2>
            <h2>{country.area} km</h2>
            <h2>{country.population} M</h2>
            <ul>
                {country.Activities &&
                 country.Activities.map((a) => {
                    return(
                        <li key={a.id}>
                            {a.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}