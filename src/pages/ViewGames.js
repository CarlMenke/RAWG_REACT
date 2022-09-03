import React, { useState, useEffect} from 'react'
import axios from 'axios'
import GameDetails from './GameDetails'
import GameCard from '../components/GameCard'


const ViewGames = (props) => {

  console.log(props)

  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games?&genres=51&key=8c60a743d1954b52be59eec01f29d404&genres=${parseInt(props.match.params.genreId)}`)
    setGames(response.data.results);
  }

  useEffect(()=>{
    getGamesByGenre()
  },[props.match.params])

  useEffect(()=>{
    console.log(games)
  },[games])

  return (
    <div className = 'genreNameLabel'>
      {props.match.params.genreName} Games:
      <div className="container-grid">
        {
          games.map((game)=>(
            <GameCard
            onClick = {()=>{props.history.push(`/game/details/${game.id}`)}}
            key = {game.id}
            name = {game.name}
            image = {game.background_image}
            {...game}/>
          ))
        }
      </div>
    </div>
  )
}

export default ViewGames
