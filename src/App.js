import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar1 from './Component/Header/Navbar1';
import Items from './Component/Items';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [toploding,setTopLoding]=useState(0)

  return (
   <>
   <LoadingBar
   color='#f11946'
   progress={toploding}
 />
   <Router>
      
<Navbar1/>
  
   <Routes>
   <Route exact path="/" element={<Home setproges={setTopLoding} />}/>
   <Route exact path="/tv" element={<Items type="tv" setproges={setTopLoding} />}/>
   <Route exact path="/movies" element={<Items type="movie" setproges={setTopLoding} />}/>

   


   
   </Routes>
</Router>
   </>
  );
}

export default App;
