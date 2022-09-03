import React from 'react'

const GameCard = (props) => {

  let onClick = props.onClick
  let image = props.image
  let name= props.name
  let rating= props.rating

  let difference = (5 - parseInt(rating))

  let ratingStars  = '';
  for(let i = 0; i< parseInt(rating); i++){
    ratingStars += '★'
  }

  for(let i = 0; i < difference; i++){
    ratingStars += '☆'
  }


  return (
    <div className="card game-card" onClick = {onClick} >
      <div className="img-wrapper">
        <img src = {image} alt = 'gameImg'></img>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{ratingStars}</p>
      </div>
    </div>
  )
}

export default GameCard
