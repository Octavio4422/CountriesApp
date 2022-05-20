import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { queryCountries } from '../../../redux/actions';

export default function SeachBar(){
    let dispatch = useDispatch();
    
    const [input, setInput] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(queryCountries(input))
    }
    
    return(
        <div>
            <form  onSubmit={(e) => handleSumbit(e)} >
                <input 
                    type={'text'} 
                    placeholder='Search Countries'
                    onChange={(e) => setInput(e.target.value)}    
                    />
                    <button onClick={handleSumbit} >Search</button>
            </form>
        </div>
    )
}