import {Routes, Route} from "react-router-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/Home/Home"
import CountryDetail from "./components/CountryDetail/CountryDetail";
import CreateActivity from "./Pages/CreateActivity/CreateActivity";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/countries/:id' element={<CountryDetail/>} />
        <Route exact path='/activity' element={<CreateActivity/>}/>
      </Routes>
    </div>
  );
}



export default App;
