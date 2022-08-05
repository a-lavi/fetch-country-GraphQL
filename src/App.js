import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from "react-router-dom";
import Countries from './Countries';
import ShowCountries from './ShowCountries';
import { useState } from "react"

function App() {
  const [data, setData] = useState([])
  console.log(data)
  return (
    <div className="App">
     <Routes>
    <Route path="/" element={<Countries data={data} setData={setData}/>} />
    {/* <Route path="/" element={<ShowCountries data={data}/>} /> */}
  </Routes>
  <ShowCountries data={data}/>
    </div>
  );
}

export default App;
