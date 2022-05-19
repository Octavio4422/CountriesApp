import {Routes, Route} from "react-router-dom";
import "./App.css";
// import Countries from "./components/Countries/Countries";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import CountryDetail from "./components/CountryDetail/CountryDetail";
import CreateActivity from "./components/CreateActivity/CreateActivity";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/:id' element={<CountryDetail/>} />
        <Route exact path='/activity' element={<CreateActivity/>}/>
      </Routes>
    </div>
  );
}



export default App;
