import {Routes, Route} from "react-router-dom";
import "./App.css";
// import Countries from "./components/Countries/Countries";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}



export default App;
