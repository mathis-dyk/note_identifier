import React, { useState, useEffect } from 'react'
import GameCard from '../GameCard'
import './index.scss'
import { useAuth } from "context/auth";


const GameList = () => {
  const [games, setGames] = useState([])
  const { authTokens, setAuthTokens } = useAuth();

  useEffect(() => {
    fetch(${process.env.REACT_APP_BACK_URL}games/')
    .then((response) => response.json())
    .then((response) => setGames(response))
  }, [])

  return (
    <div className="game-list">
      <h1>Our games</h1>
      <div className="game-list_cards">
        {
          games.map((game) => {
            const { title, description, slug, _id } = game
            return (
              <GameCard title={title} id={_id} key={slug} isAuth={authTokens ? true : false} description={description} slug={slug} />
            )
          })
        }
      </div>
    </div>
  );
}

export default GameList
