import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const apiKey="e950d73600e7bfe734b7e091b1212218";
const imageurl="https://image.tmdb.org/t/p/original";


function Row(props) {
    const[result,setResult]=useState([])
let fetchApi=async()=>
{
   let responce= await axios.get(`https://api.themoviedb.org/3/movie/${props.titel}?api_key=${apiKey}&language=en-US&page=1`)
 
   setResult(responce.data.results)
   
 
}
useEffect(()=>
{
    

fetchApi()

},[])

  return (
    <div className='row' >
    
      <h2>{props.heading}</h2>
     <div className='poster' key={result.id} >
    {
        
        result.map((element)=>
        {
            return(
                
                <Card key={result.id} img={`${imageurl}${element.poster_path}`}/>
            )
            
        })
    }
     
</div>
      </div>
  )
}

export default Row
