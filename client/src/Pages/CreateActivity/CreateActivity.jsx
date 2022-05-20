import { useState } from "react";
import { useDispatch } from "react-redux";
import { createActivity } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";

export default function CreateActivity() {
  const dispatch = useDispatch();

  let [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
  });

  let handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createHouse(input));
  };

  return (
    <div>
      <NavBar />
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Activity: </label>
            <input
              type={"text"}
              name={"name"}
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Difficulty: </label>
            <select name="difficulty" onChange={(e) => handleChange(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label>Duration: </label>
            <input
              placeholder=" Example: 24"
              type="number"
              name={"duration"}
              value={input.duration}
              onChange={(e) => handleChange(e)}
            />{" "}
            *In Hours
          </div>
          <div>
            <label>Season: </label>
            <select name="season" onChange={(e) => handleChange(e)}>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>
          <button type="submit">Create Activity</button>
        </form>
      </div>
    </div>
  );
}
