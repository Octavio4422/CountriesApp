import {Routes, Route} from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries/Countries";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Countries/>} />
      </Routes>
    </div>
  );
}



export default App;
