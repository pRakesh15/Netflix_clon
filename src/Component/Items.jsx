import React, { useEffect, useState } from 'react'
import Card from './Home/Card'
import axios from 'axios';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const apiKey="e950d73600e7bfe734b7e091b1212218";
const imageurl="https://image.tmdb.org/t/p/original";

function Items(props) {
    const[result,setResult]=useState([])
    const [page,setPage]=useState(1)
    const[totalres,setTotalres]=useState(100);
    const [loding,setLoding]=useState(true)
    let fetchApi=async()=>
    {
      props.setproges(10);
      setLoding(true)
      props.setproges(30);
       let responce= await axios.get(`https://api.themoviedb.org/3/${props.type}/popular?api_key=${apiKey}&language=en-US&page=${page}`)
       props.setproges(50);
     setLoding(false)
     props.setproges(70);
       setResult(responce.data.results)
       props.setproges(100);
     
    }
    useEffect(()=>
    {

    fetchApi()
    
    },[props.type])

    let nextPage=async()=>
    {
let Url=`https://api.themoviedb.org/3/${props.type}/popular?api_key=${apiKey}&language=en-US&page=${page+1}`
setLoding(true)
      setPage(page+1);
      let responce= await axios.get(Url);
      // setArticle(article.concat(data.data.articles))
      setResult(result.concat(responce.data.results))
setLoding(false)

    }
  return (
    <div key={result.id} className='Movie'>
    {loding && <Spinner/>}
    <div className='item'>
    
    {
      result.map((element)=>
      {
          return(
              
              <Card key={result.id} img={`${imageurl}${element.poster_path}`} />
          )
          
      })
  }
    </div>
    <InfiniteScroll
    dataLength={result.length}
    next={nextPage}
    hasMore={totalres}
    loader={<Spinner/>}
  ></InfiniteScroll>
    </div>
  )
}

export default Items
