import React, { useEffect, useState } from 'react'
import './Home.scss'
import Row from './Row'
import axios from 'axios'
import {GrPlayFill} from "react-icons/gr"
import {BsInfoCircle} from "react-icons/bs"
const apiKey="e950d73600e7bfe734b7e091b1212218";
const imageurl="https://image.tmdb.org/t/p/original";


function Home(props) {
  const[result,setResult]=useState([])
  let fetchApi=async()=>
  {
    props.setproges(10);    
     let responce= await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    props.setproges(30);
     setResult(responce.data.results[5])
     props.setproges(60);
     props.setproges(100);
  }
  useEffect(()=>
  {
      
  
  fetchApi()
  
  },[])
 
  return (
  <section className="home">
  <div className="banner" style={{
    backgroundImage:`url(${imageurl}/${result.backdrop_path})`
  }}>
  
    <h3>{result.original_title}</h3>
    <p>{result.overview}</p>

    <div>
    <button><GrPlayFill/>Play</button>
    <button><BsInfoCircle/>More Info</button>
    </div>
  

  </div>

  <div className='irow'>
  <Row heading="Popular on Netflix" titel="popular"/>
  </div>
<Row heading="Upcoming on Netflix" titel="upcoming"/>
  <Row heading="Now Playing" titel="now_playing"/>
<Row heading="Top Rated on Netflix" titel="top_rated"/>
  </section>
  )
}

export default Home
