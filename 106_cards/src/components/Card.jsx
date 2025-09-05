import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://tse4.mm.bing.net/th/id/OIP.hB-oMf-w5cVw-zpiDzzPEAHaE7?pid=Api&P=0&h=180" style={{ border : "2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card