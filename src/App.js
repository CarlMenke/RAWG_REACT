import React from 'react'
import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import ViewSearchedGames from './pages/ViewGames'
import About from './pages/About'
import { Search } from './components/Search'


const App = (props) => {

  return (
    <div>
    <Header {...props}/>
    <main>
      <Switch>
        <Route exact path="/" component={(props)=><Home {...props}/>}/>
        <Route exact path="/about" component={(props)=><About {...props}/>}/> 
        <Route exact path="/gamedetails" component={(props)=><GameDetails {...props}/>}/>       
        <Route exact path="/viewgames" component={(props)=><ViewGames {...props}/>}/>          
        <Route exact path="/search" component={(props)=><Search {...props}/>}/>      
        <Route exact path="/game/details/:gameId" component={(props)=><GameDetails {...props}/>}/>     
        <Route exact path="/view/games/:genreId/:genreName" component={(props)=><ViewGames {...props}/>}/>  
        <Route exact path="view/searched/games/:gameName" component={(props)=><ViewSearchedGames {...props}/>}/>          
      </Switch>
    </main>
  </div>
  )
}

export default App
