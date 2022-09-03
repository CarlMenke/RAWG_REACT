import React, { useState, useEffect, useRef} from 'react'
import { ReactDOM } from 'react-dom'
import  Search  from '../components/Search'
import  GameCard  from '../components/GameCard'
import  GenreCard  from '../components/GenreCard'
import axios from 'axios'

const Home = (props) => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState(null)
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')


  const getGenres = async () => {
    const response = await axios.get("https://api.rawg.io/api/genres?key=8c60a743d1954b52be59eec01f29d404")
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=8c60a743d1954b52be59eec01f29d404`)
    setSearchResults(res.data.results[0])
    toggleSearched(true)
    setSearchQuery('')
    console.log('inside get search results and onsubmit' , searched)
  }

useEffect(()=>{
  if(searchResults != null){
  console.log('searched results', searchResults)
  props.history.push(`/game/details/${searchResults.id}`)
  setSearchResults(null)
  }
},[searchResults])

useRef(()=>{
  console.log('searchQuery', searchQuery)
},[searchQuery])

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(()=>{
    getGenres();
  },[])

console.log('rendered')
    return(
      <div>
        <div className="search">
        <Search onSubmit = {getSearchResults} onChange = {handleChange}/>
          <h2 >Search Results</h2>
          <section className="search-results container-grid">

          </section>
        </div>
        <div className="genres">
          <h2>Genres</h2>
          <section className="container-grid">
            {
            genres.map((genre) => (
              <GenreCard  
              onClick = {()=>{props.history.push(`/view/games/${genre.id}/${genre.name}`)}}
              key = {genre.id}
              name = {genre.name}
              image = {genre.image_background}
              games = {genre.games}
              {...genre}/>
            ))
            }

          </section>
        </div>
      </div>
    )
}


export default Home
