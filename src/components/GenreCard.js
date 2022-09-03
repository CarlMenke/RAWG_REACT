import React from 'react'

export const GenreCard = (props) => {
  const image = props.image
  const name = props.name
  const gameCount = props.gamesCount
  const onClick = props.onClick
  return(
    <div className="card" onClick = {onClick}>
      <div className="img-wrapper">
        <img src = {image} alt ="genreImg"></img>

      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{gameCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
