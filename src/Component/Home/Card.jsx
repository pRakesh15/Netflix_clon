import React from 'react'

function Card(props) {
  return (
  
    
    <img key={props.key} className='card' src={props.img} alt="cover" />
   

  )
}

export default Card
