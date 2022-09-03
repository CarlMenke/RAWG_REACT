import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GameDetails = (props) => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [gameDetails, setGameDetails] = useState(null)
  // const [starRating, setStarRating] = useState('')

  let ratingStars = '';
  useEffect(async () => {
    const response = await axios.get(`https://api.rawg.io/api/games/${parseInt(props.match.params.gameId)}?&genres=51&key=8c60a743d1954b52be59eec01f29d404`)
    console.log('response.data', response.data)
    setSelectedGame(response.data)
  }, [props.match.params.gameId])


  // useEffect(() => {
  //   let difference = (5 - parseInt(selectedGame.rating))

  //   let random  = '';
  //   for(let i = 0; i< parseInt(selectedGame.rating); i++){
  //     random += '★'
  //   }
  
  //   for(let i = 0; i < difference; i++){
  //     random += '☆'
  //   }

  //   setStarRating(random)

  //   return(setStarRating(''))
  // }, [selectedGame])



  console.log(parseInt(props.match.params.gameId))
  console.log(props)
  if(selectedGame === null){
    return(null)
  }else{return (
    <div className="game-content">
      <h1>{selectedGame.name}</h1>
      <section className="image-container">
        <div>
          <img src = {selectedGame.background_image}></img>
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
        <div>
          Attributes:
          {
            selectedGame.tags.map((tag)=>(
              <div>{tag.name}</div>
            ))
          }</div>
          <div>Developers: {selectedGame.developers[0].name}</div>
          {/* <div>{ratingStars}</div> */}
          <div>
            Publishers:{
            selectedGame.publishers.map((pub)=>(
              <div>{pub.name}</div>
            ))
          }</div>
          
          <div>{selectedGame.website}</div>
        </div>
        <div>
          <h3>

          </h3>
        </div>
      </section>
    </div>
  )
  }
}

export default GameDetails
