import React, { useState, useEffect } from 'react'
import GameCard from '../GameCard'
import './index.scss'
import { useAuth } from "context/auth";


const GameList = () => {
  const [games, setGames] = useState([])
  const { authTokens, setAuthTokens } = useAuth();

  useEffect(() => {
    fetch('http://localhost:3000/games/')
    .then((response) => response.json())
    .then((response) => setGames(response))


    // const getMe = () => {
    //   fetch(`${process.env.REACT_APP_BACK_URL}auth/me`, {
    //     method: 'post',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       "userid": JSON.parse(localStorage.getItem('userid'))
    //     })
    //   })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .then((error) => console.log(error))
    // }

    // if(authTokens) {
    //   getMe()
    // }
    
  }, [])

  return (
    <div className="game-list">
      <h1>Our games</h1>
      <div className="game-list_cards">
        {
          games.map((game) => {
            const { title, description, slug } = game
            return (
             <GameCard title={title} key={slug} isAuth={authTokens ? true : false} description={description} slug={slug} />
            )
          })
        }
      </div>
    </div>
  );
}

export default GameList
