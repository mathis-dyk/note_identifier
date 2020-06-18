import React, { useState, useEffect } from 'react'
import './index.scss'

const GameCard = ({ title, description, slug, isAuth }) => {
  const [getBestScore, setGetBestScore] = useState(false)
  const [bestScore, setBestScore] = useState(0)
  useEffect(() => {
    
  }, [])

  return (
    <div className="game-card">
      <img src="https://via.placeholder.com/300x150" alt="" />
      <h2>{ title }</h2>
      <p>{ description }</p>
      <a href={`/games/${slug}`}>Play this game</a>
      { isAuth && !getBestScore && <p>Tu n'as pas encore joué à ce jeu</p> }
      { isAuth && getBestScore && <p>Ton meilleur score :</p> }
    </div>
  )
}

export default GameCard
